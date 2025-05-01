import React, { useEffect, useState } from 'react';
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
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin

export default function Login() {
  const navigate = useNavigate();

  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const togglePwd = () => setShowPwd((prev) => !prev);

  const isValidEmail = /\S+@\S+\.\S+/.test(form.email);
  const isValidPassword = form.password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Avoid submitting if already in progress
    if (isSubmitting) return;

    setIsSubmitting(true);
    setLoading(true);

    if (!form.email.trim() || !form.password) {
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

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, form);

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      setError('');
      setForm({ email: '', password: '' });
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials.');
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (response) => {
    setLoading(true);
    try {
      const { credential } = response;
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/google-login`, { token: credential });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Google login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'primary.main',
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
              Welcome Back
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="filled"
                required
                value={form.email}
                onChange={handleChange}
                sx={{ mb: 3 }}
                InputLabelProps={{ style: { color: '#ccc' } }}
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
                sx={{ mb: 3 }}
                InputLabelProps={{ style: { color: '#ccc' } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePwd} sx={{ color: 'white' }}>
                        {showPwd ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {error && (
                <Typography color="error" variant="body2" mb={2}>
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                disabled={!form.email || !form.password || loading}
                sx={{
                  borderRadius: 3,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  mb: 3,
                }}
              >
                {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login'}
              </Button>
            </form>

            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }}>OR</Divider>

            <Stack spacing={2}>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => setError('Google login failed.')}
                useOneTap
                theme="filled_blue"
                size="large"
              />
            </Stack>

            <Typography mt={4} textAlign="center" fontSize="0.9rem">
              Don’t have an account?{' '}
              <Link to="/signup" style={{ color: '#FFA559', textDecoration: 'none' }}>
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
