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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';

export default function Signup() {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const togglePwd = () => setShowPwd((p) => !p);
  const toggleConfirm = () => setShowConfirm((p) => !p);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signing up with:', form);
    // TODO: call signup API
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
    // TODO: handle OAuth logic
  };

  return (
    <>
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
          <Card
            elevation={6}
            sx={{
              borderRadius: 4,
              bgcolor: '#0f274a',
              color: 'white',
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography variant="h4" fontWeight="bold" mb={3} color="#FFA559">
                Create Account
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  variant="filled"
                  required
                  sx={{
                    mb: 3,
                    input: { color: 'white' },
                    '.MuiFilledInput-root': {
                      bgcolor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                  InputLabelProps={{ style: { color: '#ccc' } }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  variant="filled"
                  required
                  sx={{
                    mb: 3,
                    input: { color: 'white' },
                    '.MuiFilledInput-root': {
                      bgcolor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                  InputLabelProps={{ style: { color: '#ccc' } }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  variant="filled"
                  required
                  sx={{
                    mb: 3,
                    input: { color: 'white' },
                    '.MuiFilledInput-root': {
                      bgcolor: 'rgba(255,255,255,0.08)',
                    },
                  }}
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

                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirm"
                  type={showConfirm ? 'text' : 'password'}
                  value={form.confirm}
                  onChange={handleChange}
                  variant="filled"
                  required
                  sx={{
                    mb: 4,
                    input: { color: 'white' },
                    '.MuiFilledInput-root': {
                      bgcolor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                  InputLabelProps={{ style: { color: '#ccc' } }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={toggleConfirm}
                          sx={{ color: 'white' }}
                        >
                          {showConfirm ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  size="large"
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 3, fontWeight: 'bold' }}
                >
                  Sign Up
                </Button>
              </form>

              <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }}>
                OR
              </Divider>

              <Stack spacing={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleSocialSignup('Google')}
                  startIcon={<FaGoogle />}
                  sx={{
                    color: 'white',
                    borderColor: '#ccc',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#FFA559',
                      backgroundColor: 'rgba(255,165,89,0.05)',
                    },
                  }}
                >
                  Sign Up with Google
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleSocialSignup('Microsoft')}
                  startIcon={<FaMicrosoft />}
                  sx={{
                    color: 'white',
                    borderColor: '#ccc',
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#FFA559',
                      backgroundColor: 'rgba(255,165,89,0.05)',
                    },
                  }}
                >
                  Sign Up with Microsoft
                </Button>
              </Stack>

              <Typography mt={4} textAlign="center" fontSize="0.9rem">
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#FFA559' }}>
                  Log in
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </>
  );
}
