from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# MongoDB Config
app.config["MONGO_URI"] = "mongodb://localhost:27017/learn4dream"
mongo = PyMongo(app)

# Home route
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Flask Backend Running!"})

# Contact form route
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

# Signup route
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

    # Check if user already exists
    existing_user = mongo.db.users.find_one({"email": email})
    if existing_user:
        return jsonify({"status": "error", "message": "User already exists"}), 409

    # Hash the password before saving
    hashed_password = generate_password_hash(password)

    user_data = {
        "name": name,
        "email": email,
        "password": hashed_password
    }

    result = mongo.db.users.insert_one(user_data)

    if result.inserted_id:
        return jsonify({"status": "success", "message": "User registered successfully!"}), 201
    else:
        return jsonify({"status": "error", "message": "Failed to register user"}), 500

# Login route
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
        return jsonify({"status": "success", "message": "Login successful!"}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid email or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)
