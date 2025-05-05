from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import os
from google.oauth2 import id_token
from google.auth.transport import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB Config
app.config["MONGO_URI"] = os.getenv("MONGO_URI")  
mongo = PyMongo(app)

# JWT Config
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")  
jwt = JWTManager(app)

# Google Token Verification Function
def verify_google_token(token):
    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), os.getenv("GOOGLE_CLIENT_ID"))
        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')
        return idinfo
    except ValueError:
        raise ValueError('Invalid Google token')

@app.route("/", methods=["GET"])
def root():
    return jsonify({"message": "Flask Backend Running!"})

@app.route("/Home", methods=["GET"])
@jwt_required()
def home():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Welcome {current_user['name']}!"})

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    if not data:
        return jsonify({"status": "error", "message": "No data received"}), 400

    email = data.get("email")
    message = data.get("message")

    if not email or not message:
        return jsonify({"status": "error", "message": "Missing fields"}), 400

    contact_data = {"email": email, "message": message}
    result = mongo.db.contacts.insert_one(contact_data)

    if result.inserted_id:
        return jsonify({"status": "success", "message": "Message sent successfully!"}), 200
    else:
        return jsonify({"status": "error", "message": "Failed to send message"}), 500

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    if not data:
        return jsonify({"status": "error", "message": "No data received"}), 400

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"status": "error", "message": "Missing fields"}), 400

    existing_user = mongo.db.users.find_one({"email": email})
    if existing_user:
        return jsonify({"status": "error", "message": "User already exists"}), 409

    hashed_password = generate_password_hash(password)
    user_data = {"name": name, "email": email, "password": hashed_password}
    result = mongo.db.users.insert_one(user_data)

    if result.inserted_id:
        access_token = create_access_token(identity={"name": name, "email": email})
        return jsonify({"status": "success", "message": "User registered successfully!", "access_token": access_token}), 201
    else:
        return jsonify({"status": "error", "message": "Failed to register user"}), 500

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data:
        return jsonify({"status": "error", "message": "No data received"}), 400

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"status": "error", "message": "Missing fields"}), 400

    user = mongo.db.users.find_one({"email": email})

    if user and check_password_hash(user["password"], password):
        access_token = create_access_token(identity={"name": user["name"], "email": email})
        return jsonify({"status": "success", "message": "Login successful!", "access_token": access_token}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid email or password"}), 401

@app.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    user = mongo.db.users.find_one({"email": current_user["email"]})

    if user:
        return jsonify({
            "name": user["name"],
            "email": user["email"]
        })
    else:
        return jsonify({"status": "error", "message": "User not found"}), 404

@app.route("/google-signin", methods=["POST"])
def google_signin():
    data = request.get_json()
    google_token = data.get("token")
    
    if not google_token:
        return jsonify({"status": "error", "message": "Missing token"}), 400
    
    try:
        idinfo = verify_google_token(google_token)
        existing_user = mongo.db.users.find_one({"email": idinfo['email']})

        if not existing_user:
            mongo.db.users.insert_one({
                "name": idinfo['name'],
                "email": idinfo['email'],
                "password": None
            })

        access_token = create_access_token(identity={"name": idinfo['name'], "email": idinfo['email']})
        return jsonify({"status": "success", "message": "Google Sign-In successful!", "access_token": access_token}), 200
    
    except ValueError:
        return jsonify({"status": "error", "message": "Invalid Google token"}), 401
    
@app.route('/login/google', methods=['POST'])
def login_with_google():
    token = request.json.get('token')
    if not token:
        return jsonify({'msg': 'Missing token'}), 400

    try:
        # Verify the token with Google
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), os.getenv('GOOGLE_CLIENT_ID'))

        # Get user's email and name
        email = idinfo['email']
        name = idinfo.get('name', 'No Name')

        # Optionally, save user to DB or check if they already exist
        user = mongo.db.users.find_one({'email': email})
        if not user:
            mongo.db.users.insert_one({
                'email': email,
                'name': name
            })

        # Create JWT token
        access_token = create_access_token(identity=email)
        return jsonify({'access_token': access_token, 'user': {'email': email, 'name': name}}), 200

    except ValueError as e:
        return jsonify({'msg': 'Invalid token', 'error': str(e)}), 401


if __name__ == '__main__':
    app.run(debug=True)
