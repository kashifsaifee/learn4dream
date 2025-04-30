import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Grid, Paper, Chip, Divider } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track error status

  // Fetch user data from backend API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found, please log in');
        }

        // Make API request to backend
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data); // Store user data in state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message); // Set error if any
        setLoading(false); // Stop loading
      }
    };

    fetchUserData();
  }, []);

  // Display loading or error messages
  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Box sx={{ background: '#f7f9fc', minHeight: '100vh', py: 5 }}>
      {/* Hero Section */}
      <Typography variant="h3" fontWeight="bold" textAlign="center" mb={6}>
        Hello, {user ? user.name : 'User'}
      </Typography>

      {/* Profile Card */}
      <Grid container justifyContent="center">
        <Grid item xs={10} md={6}>
          <Paper sx={{ p: 4, borderRadius: '2xl', background: '#fff' }} elevation={6}>
            <Avatar
              src={user && user.avatar ? user.avatar : 'https://i.pravatar.cc/300'}
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h5" fontWeight="bold">
              {user ? user.name : 'No Name'}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {user ? user.email : 'No Email'}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {user && user.skills && user.skills.map(skill => (
                <Chip key={skill} label={skill} color="primary" sx={{ mr: 1 }} />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Contact Info */}
      <Box sx={{ textAlign: 'center', mt: 10, pb: 6 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Let's Connect!
        </Typography>
        <Typography variant="body2" mb={2}>
          I’m open to freelance work, collaborations, and new opportunities.
        </Typography>
        <Chip label={user ? user.email : 'No Email'} variant="outlined" color="primary" sx={{ mr: 1 }} />
        <Chip label={user ? user.phone : 'No Phone'} variant="outlined" color="success" />
      </Box>
    </Box>
  );
};

export default Profile;
