import os
import logging
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from google.oauth2 import id_token
from google.auth.transport import requests
from dotenv import load_dotenv

# Load Environment Variables
load_dotenv()

# Flask Initialization
app = Flask(__name__)

# === Configuration ===

# MongoDB
MONGO_URI = os.getenv("MONGO_URI")
if not MONGO_URI:
    raise RuntimeError("Missing MONGO_URI in .env file")
app.config["MONGO_URI"] = MONGO_URI

# JWT
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
if not JWT_SECRET_KEY:
    raise RuntimeError("Missing JWT_SECRET_KEY in .env file")
app.config["JWT_SECRET_KEY"] = JWT_SECRET_KEY
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = int(os.getenv("JWT_ACCESS_TOKEN_EXPIRES", "3600"))

# Flask Secret
app.secret_key = os.getenv("FLASK_SECRET_KEY", "dev-secret")

# Google OAuth
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
if not GOOGLE_CLIENT_ID:
    raise RuntimeError("Missing GOOGLE_CLIENT_ID in .env file")

# CORS
CLIENT_ORIGIN = os.getenv("CLIENT_ORIGIN", "http://localhost:3000")
CORS(app, resources={r"/api/*": {"origins": CLIENT_ORIGIN}})

# Logging
LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO").upper()
logging.basicConfig(level=LOG_LEVEL)

# === Extensions ===
mongo = PyMongo(app)
jwt = JWTManager(app)

# === Helper Functions ===
def verify_google_token(token):
    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
        if idinfo["iss"] not in ["accounts.google.com", "https://accounts.google.com"]:
            raise ValueError("Invalid issuer.")
        return idinfo
    except ValueError as e:
        logging.error(f"Google Token Verification Error: {e}")
        return None

# === Routes ===

@app.route("/", methods=["GET"])
def root():
    return jsonify({"message": "Flask Backend Running!"})

@app.route("/home", methods=["GET"])
@jwt_required()
def home():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Welcome {current_user['name']}!"})

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    email, message = data.get("email"), data.get("message")

    if not email or not message:
        return jsonify({"status": "error", "message": "Missing email or message"}), 400

    result = mongo.db.contacts.insert_one({"email": email, "message": message})
    if result.inserted_id:
        return jsonify({"status": "success", "message": "Message sent successfully!"})
    return jsonify({"status": "error", "message": "Failed to send message"}), 500

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    name, email, password = data.get("name"), data.get("email"), data.get("password")

    if not all([name, email, password]):
        return jsonify({"status": "error", "message": "All fields are required"}), 400

    if mongo.db.users.find_one({"email": email}):
        return jsonify({"status": "error", "message": "User already exists"}), 409

    hashed_pw = generate_password_hash(password, method="pbkdf2:sha256", salt_length=16)
    result = mongo.db.users.insert_one({"name": name, "email": email, "password": hashed_pw})

    if result.inserted_id:
        token = create_access_token(identity={"name": name, "email": email})
        return jsonify({"status": "success", "access_token": token}), 201

    return jsonify({"status": "error", "message": "Registration failed"}), 500

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email, password = data.get("email"), data.get("password")

    if not email or not password:
        return jsonify({"status": "error", "message": "Missing email or password"}), 400

    user = mongo.db.users.find_one({"email": email})
    if user and check_password_hash(user["password"], password):
        token = create_access_token(identity={"name": user["name"], "email": email})
        return jsonify({"status": "success", "access_token": token}), 200

    return jsonify({"status": "error", "message": "Invalid credentials"}), 401

@app.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    identity = get_jwt_identity()
    user = mongo.db.users.find_one({"email": identity["email"]})
    if user:
        return jsonify({"name": user["name"], "email": user["email"]})
    return jsonify({"status": "error", "message": "User not found"}), 404

@app.route("/google-signin", methods=["POST"])
def google_signin():
    data = request.get_json()
    token = data.get("token")

    if not token:
        return jsonify({"status": "error", "message": "Missing token"}), 400

    idinfo = verify_google_token(token)
    if not idinfo:
        return jsonify({"status": "error", "message": "Invalid Google token"}), 401

    email = idinfo["email"]
    name = idinfo.get("name", "Google User")

    if not mongo.db.users.find_one({"email": email}):
        mongo.db.users.insert_one({
            "name": name,
            "email": email,
            "auth_provider": "google"
        })

    access_token = create_access_token(identity={"name": name, "email": email})
    return jsonify({"status": "success", "access_token": access_token}), 200

# === Start Server ===
if __name__ == "__main__":
    app.run(debug=True)
