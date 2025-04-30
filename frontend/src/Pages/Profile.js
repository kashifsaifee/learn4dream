// src/Pages/UpdateProfile.jsx

import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Avatar,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    dob: '',
    address1: '',
    address2: '',
    address3: '',
    password: '',
    confirmPassword: '',
    profilePic: '',
    profilePicFile: null,
  });

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Load enrolled courses from localStorage
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(savedCourses);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePicFile: file,
        profilePic: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile Data:', formData);
    alert("Profile updated!");
  };

  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        minHeight: '100vh',
        py: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Profile Update Form */}
      <Card sx={{ maxWidth: 600, width: '100%', p: 3, borderRadius: 4, mb: 4 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            My Profile
          </Typography>

          {/* Profile Picture */}
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item sx={{ position: 'relative' }}>
              <Avatar
                src={formData.profilePic}
                sx={{ width: 100, height: 100 }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{
                  position: 'absolute',
                  bottom: -10,
                  right: -10,
                  bgcolor: 'white',
                  boxShadow: 2,
                }}
              >
                <input hidden accept="image/*" type="file" onChange={handleImageChange} />
                <PhotoCamera />
              </IconButton>
            </Grid>
          </Grid>

          {/* Form Fields */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address Line 1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address Line 2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address Line 3"
                  name="address3"
                  value={formData.address3}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Enrolled Courses Section */}
      <Card sx={{ maxWidth: 600, width: '100%', p: 3, borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Your Enrolled Courses
          </Typography>

          {enrolledCourses.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              You haven't enrolled in any courses yet.
            </Typography>
          ) : (
            enrolledCourses.map((course, index) => (
              <Box
                key={index}
                sx={{
                  border: '1px solid #ddd',
                  borderRadius: 2,
                  p: 2,
                  mb: 2,
                  backgroundColor: '#fff',
                }}
              >
                <Typography variant="h6" color="primary">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </Box>
            ))
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default UpdateProfile;
