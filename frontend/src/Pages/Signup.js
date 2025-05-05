import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Divider,
  Stack,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google'; // For Google OAuth

export default function Signup() {
  const navigate = useNavigate();

  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
    setSuccess('');
  };

  const togglePwd = () => setShowPwd((prev) => !prev);
  const toggleConfirm = () => setShowConfirm((prev) => !prev);

  const isValidEmail = /\S+@\S+\.\S+/.test(form.email);
  const isValidPassword = form.password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Avoid submitting if already in progress
    if (isSubmitting) return;

    setIsSubmitting(true);
    setLoading(true);

    // Basic form validation
    if (!form.name.trim() || !form.email.trim() || !form.password || !form.confirm) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      setLoading(false);
      return;
    }

    if (!isValidEmail) {
      setError('Invalid email format.');
      setIsSubmitting(false);
      setLoading(false);
      return;
    }

    if (!isValidPassword) {
      setError('Password must be at least 6 characters.');
      setIsSubmitting(false);
      setLoading(false);
      return;
    }

    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      setIsSubmitting(false);
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      setSuccess('Account created successfully!');
      setForm({ name: '', email: '', password: '', confirm: '' });

      // Redirect after successful signup
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  const handleGoogleSignup = async (response) => {
    setLoading(true);
    try {
      const { credential } = response;
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/google-signup`, { token: credential });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      setSuccess('Account created successfully!');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const isFormInvalid = !form.name || !form.email || !form.password || !form.confirm || !isValidEmail || !isValidPassword;

  const inputStyles = {
    mb: 3,
    input: { color: 'white' },
    '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)' },
  };

  const inputLabelProps = {
    style: { color: '#ccc' },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#FFB6C1', // Baby pink background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: 460 }}
      >
        <Card elevation={6} sx={{ borderRadius: 4, bgcolor: '#0f274a', color: 'white' }}>
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Typography variant="h4" fontWeight="bold" mb={3} color="#FFA559">
              Create Account
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                variant="filled"
                required
                value={form.name}
                onChange={handleChange}
                sx={inputStyles}
                InputLabelProps={inputLabelProps}
                aria-label="Full Name"
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="filled"
                required
                value={form.email}
                onChange={handleChange}
                sx={inputStyles}
                InputLabelProps={inputLabelProps}
                aria-label="Email"
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPwd ? 'text' : 'password'}
                variant="filled"
                required
                value={form.password}
                onChange={handleChange}
                sx={inputStyles}
                InputLabelProps={inputLabelProps}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePwd}
                        sx={{ color: 'white' }}
                        aria-label="toggle password visibility"
                      >
                        {showPwd ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                aria-label="Password"
              />

              <TextField
                fullWidth
                label="Confirm Password"
                name="confirm"
                type={showConfirm ? 'text' : 'password'}
                variant="filled"
                required
                value={form.confirm}
                onChange={handleChange}
                sx={{ ...inputStyles, mb: 2 }}
                InputLabelProps={inputLabelProps}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={toggleConfirm}
                        sx={{ color: 'white' }}
                        aria-label="toggle confirm password visibility"
                      >
                        {showConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                aria-label="Confirm Password"
              />

              {error && (
                <Typography color="error" variant="body2" mb={2}>
                  {error}
                </Typography>
              )}
              {success && (
                <Typography color="success.main" variant="body2" mb={2}>
                  {success}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                disabled={isFormInvalid || isSubmitting || loading}
                sx={{
                  borderRadius: 3,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  mb: 3,
                  backgroundColor: '#FFB6C1', // Baby pink button color
                }}
              >
                {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Sign Up'}
              </Button>
            </form>

            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }}>OR</Divider>

            <Stack spacing={2}>
              <GoogleLogin
                onSuccess={handleGoogleSignup}
                onError={() => setError('Google login failed.')}
                useOneTap
                theme="filled_blue"
                size="large"
                aria-label="Sign up with Google"
              />
            </Stack>

            <Typography mt={4} textAlign="center" fontSize="0.9rem">
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#FFA559', textDecoration: 'none' }}>
                Log in
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
