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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';  // social buttons

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const togglePwd = () => setShowPwd(!showPwd);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', form);
    // TODO: call login API
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
        style={{ width: '100%', maxWidth: 420 }}
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
                sx={{
                  mb: 3,
                  input: { color: 'white' },
                  '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)' },
                }}
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
                sx={{
                  mb: 3,
                  input: { color: 'white' },
                  '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)' },
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

              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                sx={{ borderRadius: 3, fontWeight: 'bold', mb: 2 }}
              >
                Log In
              </Button>
            </form>

            {/* or continue with */}
            <Typography textAlign="center" mb={1}>
              or continue with
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mb: 3,
              }}
            >
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<FaGithub />}
                sx={{ color: 'white', borderColor: 'white' }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<FaGoogle />}
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Google
              </Button>
            </Box>

            <Typography textAlign="center" fontSize="0.9rem">
              Don&rsquo;t have an account?{' '}
              <Link to="/signup" style={{ color: '#FFA559' }}>
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
