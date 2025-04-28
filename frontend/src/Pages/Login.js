<<<<<<< HEAD
import React from 'react'
import  '../Styles/Login.css'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

// import loginImage from './login.jpg'
const Login = () => {
  return (
    <>
    <div>
      <h4 className='text-white text-center' >Welcome back</h4>
      <h5 className='text-white text-center'>Login to your account </h5>
    <form className='m-auto w-50' >
  <div class="mb-3 m-5 mt-5">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" placeholder='xyz@gmail.com'ce class="form-control" id="exampleInputEmail1" />
  </div>
  <div class="mb-3 m-5">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" placeholder='xxxxxxx' class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-secondary d-grid gap-2 col-2 mt-3 mx-auto">Continue</button>

  <p className='text-center' >or continue with </p>
  <div className='flex justify-between pl-3' >
  <button className='btn text-white  '> <FaGithub size={22}/>  Github</button>
  <button className='btn text-white  '> <FaGoogle size={22} /> Google</button>
  </div>
</form>
</div>


     
     
    </>
  )
}
=======
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

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const togglePwd = () => setShowPwd((s) => !s);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', form);
    // TODO: call login API
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
>>>>>>> 5660eee226b3b940203f888cb1b6eaffc1cccafd

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

              <Typography mt={3} textAlign="center" fontSize="0.9rem">
                Don&rsquo;t have an account?{' '}
                <Link to="/signup" style={{ color: '#FFA559' }}>
                  Sign up
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Box>

    </>
  );
}
