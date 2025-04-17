from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables cross-origin requests from frontend

# MongoDB Config
app.config["MONGO_URI"] = "mongodb://localhost:27017/learn4dream"
mongo = PyMongo(app)

# Test route to confirm backend is live
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

if __name__ == '__main__':
    app.run(debug=True)
