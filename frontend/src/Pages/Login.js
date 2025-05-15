// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Typography,
//   Snackbar,
//   CircularProgress,
//   Stack
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaGoogle, FaMicrosoft } from 'react-icons/fa';

// export default function Login({ setIsLoggedIn }) {
//   const [showPwd, setShowPwd] = useState(false);
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const navigate = useNavigate();

//   const togglePwd = () => setShowPwd(!showPwd);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
//   const isValidPassword = (password) => password.length >= 6;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidEmail(form.email)) {
//       setError('Please enter a valid email address.');
//       setOpenSnackbar(true);
//       return;
//     }

//     if (!isValidPassword(form.password)) {
//       setError('Password must be at least 6 characters.');
//       setOpenSnackbar(true);
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('token', data.access_token);
//         setSuccessMessage(data.message);
//         setIsLoggedIn(true);
//         navigate('/');
//       } else {
//         setError(data.message || 'Login failed.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Something went wrong. Try again later.');
//     } finally {
//       setOpenSnackbar(true);
//       setLoading(false);
//     }
//   };

//   const handleSocialLogin = (provider) => {
//     console.log(`Logging in with ${provider}`);
//     // Implement actual social login logic here
//   };

//   const handleCloseSnackbar = () => setOpenSnackbar(false);

//   const SocialButton = ({ provider, onClick, icon }) => (
//     <Button
//       fullWidth
//       variant="outlined"
//       onClick={onClick}
//       startIcon={icon}
//       sx={{
//         color: 'white',
//         borderColor: '#ccc',
//         textTransform: 'none',
//         '&:hover': {
//           borderColor: '#FFA559',
//           backgroundColor: 'rgba(255,165,89,0.05)',
//         },
//       }}
//     >
//       Continue with {provider}
//     </Button>
//   );

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: 'primary.main',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         p: 2,
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         style={{ width: '100%', maxWidth: 420 }}
//       >
//         <Card elevation={6} sx={{ borderRadius: 4, bgcolor: '#0f274a', color: 'white' }}>
//           <CardContent sx={{ p: { xs: 4, md: 6 } }}>
//             <Typography variant="h4" fontWeight="bold" mb={3} color="#FFA559">
//               Welcome Back
//             </Typography>

//             <form onSubmit={handleSubmit}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 type="email"
//                 variant="filled"
//                 required
//                 value={form.email}
//                 onChange={handleChange}
//                 sx={{
//                   mb: 3,
//                   input: { color: 'white' },
//                   '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)' },
//                 }}
//                 InputLabelProps={{ style: { color: '#ccc' } }}
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPwd ? 'text' : 'password'}
//                 variant="filled"
//                 required
//                 value={form.password}
//                 onChange={handleChange}
//                 sx={{
//                   mb: 4,
//                   input: { color: 'white' },
//                   '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)' },
//                 }}
//                 InputLabelProps={{ style: { color: '#ccc' } }}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={togglePwd} edge="end" sx={{ color: 'white' }}>
//                         {showPwd ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 size="large"
//                 variant="contained"
//                 color="secondary"
//                 sx={{
//                   textTransform: 'none',
//                   fontWeight: 'bold',
//                   borderRadius: 3,
//                 }}
//                 disabled={loading}
//               >
//                 {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Log In'}
//               </Button>
//             </form>

//             <Typography mt={4} textAlign="center" fontSize="0.9rem">
//               Don&rsquo;t have an account?{' '}
//               <Link to="/signup" style={{ color: '#FFA559' }}>
//                 Sign up
//               </Link>
//             </Typography>

//             <Stack spacing={2} mt={4}>
//               <SocialButton provider="Google" icon={<FaGoogle />} onClick={() => handleSocialLogin('Google')} />
//               <SocialButton provider="Microsoft" icon={<FaMicrosoft />} onClick={() => handleSocialLogin('Microsoft')} />
//             </Stack>
//           </CardContent>
//         </Card>
//       </motion.div>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message={successMessage || error}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       />
//     </Box>
//   );
// }



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
  Snackbar,
  CircularProgress,
  Stack
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';

export default function Login({ setIsLoggedIn }) {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const togglePwd = () => setShowPwd(!showPwd);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) => password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      setError('Please enter a valid email address.');
      setOpenSnackbar(true);
      return;
    }

    if (!isValidPassword(form.password)) {
      setError('Password must be at least 6 characters.');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.access_token);
        setSuccessMessage(data.message);
        setIsLoggedIn(true);
        navigate('/profile');
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Try again later.');
    } finally {
      setOpenSnackbar(true);
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement actual social login logic here
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const SocialButton = ({ provider, onClick, icon }) => (
    <Button
      fullWidth
      variant="outlined"
      onClick={onClick}
      startIcon={icon}
      sx={{
        color: '#0061F2', // Blue text
        borderColor: '#0061F2', // Blue border
        textTransform: 'none',
        '&:hover': {
          borderColor: '#FFA559', // Orange border on hover
          backgroundColor: 'rgba(255,165,89,0.1)', // Light orange background on hover
        },
        mb: 2,
      }}
    >
      Continue with {provider}
    </Button>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#F4F6F9', // Light gray background
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
        <Card elevation={6} sx={{ borderRadius: 4, bgcolor: 'white', color: 'black' }}>
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Typography variant="h4" fontWeight="bold" mb={3} color="#0061F2">
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
                  input: { color: 'black' },
                  '.MuiFilledInput-root': { bgcolor: '#F1F6F9' },
                }}
                InputLabelProps={{ style: { color: '#0061F2' } }}
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
                  input: { color: 'black' },
                  '.MuiFilledInput-root': { bgcolor: '#F1F6F9' },
                }}
                InputLabelProps={{ style: { color: '#0061F2' } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePwd} edge="end" sx={{ color: '#0061F2' }}>
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
                color="primary"
                sx={{
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderRadius: 3,
                  backgroundColor: '#FFA559',
                  '&:hover': {
                    backgroundColor: '#FF7C35',
                  },
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Log In'}
              </Button>
            </form>

            <Typography mt={4} textAlign="center" fontSize="0.9rem" color="black">
              Don’t have an account?{' '}
              <Link to="/signup" style={{ color: '#0061F2' }}>
                Sign up
              </Link>
            </Typography>

            <Stack spacing={2} mt={4}>
              <SocialButton provider="Google" icon={<FaGoogle />} onClick={() => handleSocialLogin('Google')} />
              <SocialButton provider="Microsoft" icon={<FaMicrosoft />} onClick={() => handleSocialLogin('Microsoft')} />
            </Stack>
          </CardContent>
        </Card>
      </motion.div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={successMessage || error}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Box>
  );
}
