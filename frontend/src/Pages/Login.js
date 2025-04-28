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
<<<<<<< HEAD
// import { FaGithub, FaGoogle } from 'react-icons/fa'; // social buttons
=======
import { FaGoogle, FaMicrosoft } from 'react-icons/fa'
>>>>>>> 9f548c7ce07d85dcc11af9436a9ef8fcb8259100

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

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // TODO: Trigger OAuth flow (e.g., Firebase or Auth0)
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
            overflow: 'hidden',
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
                variant="filled"
                required
                value={form.password}
                onChange={handleChange}
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
                        onClick={togglePwd}
                        edge="end"
                        sx={{ color: 'white' }}
                      >
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
                sx={{
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderRadius: 3,
                }}
              >
                Log In
              </Button>
            </form>

            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }}>
              OR
            </Divider>

            <Stack spacing={2}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleSocialLogin('Google')}
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
                Continue with Google
              </Button>

              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleSocialLogin('Microsoft')}
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
                Continue with Microsoft
              </Button>
            </Stack>

            <Typography mt={4} textAlign="center" fontSize="0.9rem">
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
