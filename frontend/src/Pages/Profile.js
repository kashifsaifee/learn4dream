import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { TextField, Button } from '@mui/material';
import '../Styles/Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Get the JWT token from localStorage (or wherever you're storing it)
    const token = localStorage.getItem('access_token'); 

    if (!token) {
      setError('You must be logged in to view your profile');
      setLoading(false);
      return;
    }

    // Fetch profile data from the backend
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Send the token with the request
          },
        });

        const data = await response.json();

        if (response.ok) {
          setName(data.name);
          setEmail(data.email);
        } else {
          setError(data.message || 'Failed to fetch profile data');
        }
      } catch (err) {
        setError('An error occurred while fetching profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleSave = () => {
    // Handle saving user profile (could be an API call to update the user info)
    alert('Profile Saved!');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h4>Welcome, User</h4>
        <h3>
          <CgProfile size={30} /> Profile
        </h3>
      </div>

      <div className="profile-form">
        {error && <div className="error">{error}</div>}
        
        <div className="profile-input">
          <label htmlFor="name">Name:</label>
          <TextField
            id="name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '250px' }}
            size="small"
          />
        </div>

        <div className="profile-input">
          <label htmlFor="email">Email:</label>
          <TextField
            id="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '250px' }}
            size="small"
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          className="save-button"
          onClick={handleSave}
        >
          Save Profile
        </Button>
      </div>
    </div>
  );
};

export default Profile;
