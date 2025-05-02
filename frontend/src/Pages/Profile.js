import React from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "../Styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();  // Initialize the navigate hook

  // Logout handler function
  const handleLogout = () => {
    // Logic to clear user authentication (if any), e.g., clearing tokens, etc.
    // For now, just navigate to the Home page
    navigate("/");  // Redirect to Home page
  };

  return (
    <>
      <section>
        <div className="text-bg-light p-3 my-4 mx-5 px-4 text-center rounded border border-5">
          <CgProfile size={28} /> Profile
          <hr />

          {/* Image Upload Section */}
          <div className="p-2 rounded-circle">
            <div className="u-p bg-secondary-subtle">
              image
            </div>
            <label> upload image</label>
          </div>

          {/* Profile Form */}
          <div
            style={{ gridTemplateColumns: "1fr 1fr" }}
            className="d-grid gap-0 column-gap-3"
          >
            <div className="p-2">
              <label>Name : </label>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className="form-control"
              />
            </div>
            <div className="p-2">
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                className="form-control mt-4"
                required
              />
            </div>
            <div className="p-2">
              <label>Email : </label>
              <input
                type="text"
                name="email"
                placeholder="xyz@gmail.com"
                className="form-control"
              />
            </div>
            <div className="p-2">
              Contact :
              <input
                type="number"
                name="number"
                placeholder="XXXXX-XXXXX"
                className="form-control"
              />
            </div>
            <div className="p-2">
              <label>Address : </label>
              <input
                type="text"
                name="address"
                placeholder="street name, landmark, locality"
                className="form-control"
              />
            </div>
            <div className="p-2">
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                className="form-control mt-4"
              />
            </div>

            {/* Update Profile Button */}
            <button className="mt-5 mx-auto flex justify-center">
              Update Profile
            </button>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}  // On click, navigate to Home page
            className="logout-btn mt-3 mx-auto"
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
