from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

app = Flask(__name__)
CORS(app)

# MongoDB Config
app.config["MONGO_URI"] = "mongodb://localhost:27017/learn4dream"
mongo = PyMongo(app)

# JWT Config
app.config["JWT_SECRET_KEY"] = "f74d8ef8bf11cbe2811609c31309e3b63ceca3534c63181c3b022892889701a6"  # Change this to a real secret key!
jwt = JWTManager(app)

# Root route (handle requests to /)
@app.route("/", methods=["GET"])
def root():
    return jsonify({"message": "Flask Backend Running!"})

# Home route (protected route)
@app.route("/Home", methods=["GET"])
@jwt_required()  # Protect this route with JWT
def home():
    current_user = get_jwt_identity()  # Get the current user's identity from the token
    return jsonify({"message": f"Welcome {current_user['name']}!"})

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

# Signup route (returns JWT token)
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
        # Generate JWT token for the new user
        access_token = create_access_token(identity={"name": name, "email": email})
        return jsonify({"status": "success", "message": "User registered successfully!", "access_token": access_token}), 201
    else:
        return jsonify({"status": "error", "message": "Failed to register user"}), 500

# Login route (returns JWT token)
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
        # Generate JWT token for the user
        access_token = create_access_token(identity={"name": user["name"], "email": email})
        return jsonify({"status": "success", "message": "Login successful!", "access_token": access_token}), 200
    else:
        return jsonify({"status": "error", "message": "Invalid email or password"}), 401


# Profile route (fetch user details)
@app.route("/profile", methods=["GET"])
@jwt_required()  
def profile():
    current_user = get_jwt_identity()  # Get the current user's identity from the token
    # Find the user in the database using the email (or any other unique identifier)
    user = mongo.db.users.find_one({"email": current_user["email"]})

    if user:
        # Return the user's name and email
        return jsonify({
            "name": user["name"],
            "email": user["email"]
        })
    else:
        return jsonify({"status": "error", "message": "User not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
