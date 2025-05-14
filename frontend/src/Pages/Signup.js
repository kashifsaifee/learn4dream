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
//   Divider,
//   Stack,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
// import axios from 'axios';

// export default function Signup() {
//   const navigate = useNavigate();

//   // === State Management ===
//   const [showPwd, setShowPwd] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   // === Handlers ===
//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     setError('');
//     setSuccess('');
//   };

//   const togglePwd = () => setShowPwd((prev) => !prev);
//   const toggleConfirm = () => setShowConfirm((prev) => !prev);

//   // Email validation regex
//   const isValidEmail = /\S+@\S+\.\S+/.test(form.email);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Password mismatch check
//     if (form.password !== form.confirm) {
//       setError('Passwords do not match.');
//       setLoading(false);
//       return;
//     }

//     if (!isValidEmail) {
//       setError('Please enter a valid email address.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/signup', {
//         name: form.name,
//         email: form.email,
//         password: form.password,
//       });

//       console.log('Signup response:', res.data);

//       // Save JWT token in localStorage
//       if (res.data.token) {
//         localStorage.setItem('token', res.data.token);
//       }

//       setSuccess('Account created successfully!');
//       setForm({ name: '', email: '', password: '', confirm: '' });

//       setTimeout(() => navigate('/profile'), 1000);

//       setTimeout(() => navigate('./'), 1000);

//     } catch (err) {
//       console.error('Signup error:', err.response?.data || err.message);
//       setError(err.response?.data?.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSocialSignup = (provider) => {
//     console.log(`Signing up with ${provider}`);
//     // Here, integrate your OAuth logic (Google/Microsoft)
//   };

//   // === Validation ===
//   const isFormInvalid = !form.name || !form.email || !form.password || !form.confirm;

//   // === Styling Constants ===
//   const inputStyles = {
//     mb: 3,
//     input: { color: 'white' },
//     '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)' },
//   };

//   const inputLabelProps = {
//     style: { color: '#ccc' },
//   };

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
//         style={{ width: '100%', maxWidth: 460 }}
//       >
//         <Card elevation={6} sx={{ borderRadius: 4, bgcolor: '#0f274a', color: 'white' }}>
//           <CardContent sx={{ p: { xs: 4, md: 6 } }}>

//             {/* === Title === */}
//             <Typography variant="h4" fontWeight="bold" mb={3} color="#FFA559">
//               Create Account
//             </Typography>

//             {/* === Signup Form === */}
//             <form onSubmit={handleSubmit}>
//               {/* Full Name */}
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 name="name"
//                 variant="filled"
//                 required
//                 value={form.name}
//                 onChange={handleChange}
//                 sx={inputStyles}
//                 InputLabelProps={inputLabelProps}
//               />

//               {/* Email */}
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 type="email"
//                 variant="filled"
//                 required
//                 value={form.email}
//                 onChange={handleChange}
//                 sx={inputStyles}
//                 InputLabelProps={inputLabelProps}
//               />

//               {/* Password */}
//               <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPwd ? 'text' : 'password'}
//                 variant="filled"
//                 required
//                 value={form.password}
//                 onChange={handleChange}
//                 sx={inputStyles}
//                 InputLabelProps={inputLabelProps}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={togglePwd}
//                         sx={{ color: 'white' }}
//                         aria-label="toggle password visibility"
//                       >
//                         {showPwd ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               {/* Confirm Password */}
//               <TextField
//                 fullWidth
//                 label="Confirm Password"
//                 name="confirm"
//                 type={showConfirm ? 'text' : 'password'}
//                 variant="filled"
//                 required
//                 value={form.confirm}
//                 onChange={handleChange}
//                 sx={{ ...inputStyles, mb: 2 }}
//                 InputLabelProps={inputLabelProps}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={toggleConfirm}
//                         sx={{ color: 'white' }}
//                         aria-label="toggle confirm password visibility"
//                       >
//                         {showConfirm ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               {/* Error / Success Messages */}
//               {error && (
//                 <Typography color="error" variant="body2" mb={2}>
//                   {error}
//                 </Typography>
//               )}
//               {success && (
//                 <Typography color="success.main" variant="body2" mb={2}>
//                   {success}
//                 </Typography>
//               )}

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 size="large"
//                 variant="contained"
//                 color="secondary"
//                 disabled={isFormInvalid || loading}
//                 sx={{
//                   borderRadius: 3,
//                   fontWeight: 'bold',
//                   textTransform: 'none',
//                   mb: 3,
//                 }}
//               >
//                 {loading ? 'Signing Up...' : 'Sign Up'}
//               </Button>
//             </form>

//             {/* OR Divider */}
//             <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }}>OR</Divider>

//             {/* Social Signups */}
//             <Stack spacing={2}>
//               <Button
//                 fullWidth
//                 variant="outlined"
//                 onClick={() => handleSocialSignup('Google')}
//                 startIcon={<FaGoogle />}
//                 sx={{
//                   color: 'white',
//                   borderColor: '#ccc',
//                   textTransform: 'none',
//                   '&:hover': {
//                     borderColor: '#FFA559',
//                     backgroundColor: 'rgba(255,165,89,0.05)',
//                   },
//                 }}
//               >
//                 Sign Up with Google
//               </Button>

//               <Button
//                 fullWidth
//                 variant="outlined"
//                 onClick={() => handleSocialSignup('Microsoft')}
//                 startIcon={<FaMicrosoft />}
//                 sx={{
//                   color: 'white',
//                   borderColor: '#ccc',
//                   textTransform: 'none',
//                   '&:hover': {
//                     borderColor: '#FFA559',
//                     backgroundColor: 'rgba(255,165,89,0.05)',
//                   },
//                 }}
//               >
//                 Sign Up with Microsoft
//               </Button>
//             </Stack>

//             {/* Login Redirect */}
//             <Typography mt={4} textAlign="center" fontSize="0.9rem">
//               Already have an account?{' '}
//               <Link to="/login" style={{ color: '#FFA559', textDecoration: 'none' }}>
//                 Log in
//               </Link>
//             </Typography>

//           </CardContent>
//         </Card>
//       </motion.div>
//     </Box>
//   );
// }


// Signup.js

// Signup.js

import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
  Stack,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';

// Color palette
const COLORS = {
  background: '#f0f4f8',
  cardBg: '#ffffff',
  accent: '#4F9BFF', // blue
  secondary: '#FFA726', // orange
  inputBg: '#f9fafb',
  inputText: '#1f2937',
  inputLabel: '#6b7280',
  buttonHover: '#e3f2fd',
  outline: '#90caf9',
  error: '#ef4444',
  success: '#22c55e',
};

// Styled components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${COLORS.background};
  color: ${COLORS.inputText};
`;

const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #ffffff 0%, #E0F0FF 50%, #FFE5B4 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px;
  min-width: 320px;
  color: #1f2937;
`;

const RightPanel = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 440px;
  background: ${COLORS.cardBg};
  border-radius: 20px;
  padding: 40px 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
`;

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const togglePwd = () => setShowPwd(!showPwd);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setSnack({ open: true, message: 'Invalid email format.', severity: 'error' });
      setLoading(false);
      return;
    }

    if (form.password !== form.confirm) {
      setSnack({ open: true, message: 'Passwords do not match.', severity: 'error' });
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/signup', {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (res.data.token) localStorage.setItem('token', res.data.token);

      setSnack({ open: true, message: 'Signup successful!', severity: 'success' });
      setTimeout(() => navigate('/profile'), 1200);
    } catch (err) {
      setSnack({
        open: true,
        message: err.response?.data?.message || 'Signup failed.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    input: { color: COLORS.inputText },
    '.MuiFilledInput-root': {
      backgroundColor: COLORS.inputBg,
      borderRadius: '12px',
      border: '1px solid #e0e0e0',
    },
  };

  const handleSocialSignup = (provider) => {
    console.log(`Sign up with ${provider}`);
  };

  return (
    <Container>
      <LeftPanel>
        <Typography variant="h3" fontWeight="bold" mb={2}>
          Welcome to Learn4Dream
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 400 }}>
          Join our creative learning community and start your journey today.
        </Typography>
      </LeftPanel>

      <RightPanel
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <FormCard>
          <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center" sx={{ color: COLORS.accent }}>
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
            {['name', 'email'].map((field) => (
              <TextField

                key={field}
                fullWidth
                label={field === 'name' ? 'Full Name' : 'Email'}
                name={field}
                variant="filled"
                type={field === 'email' ? 'email' : 'text'}
                required
                value={form[field]}
                onChange={handleChange}
                sx={{ mb: 3, ...inputStyle }}
                InputLabelProps={{ style: { color: COLORS.inputLabel } }}
              />
            ))}

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPwd ? 'text' : 'password'}
              variant="filled"
              required
              value={form.password}
              onChange={handleChange}
              sx={{ mb: 3, ...inputStyle }}
              InputLabelProps={{ style: { color: COLORS.inputLabel } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePwd} edge="end" sx={{ color: COLORS.inputLabel }}>
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
              variant="filled"
              required
              value={form.confirm}
              onChange={handleChange}
              sx={{ mb: 3, ...inputStyle }}
              InputLabelProps={{ style: { color: COLORS.inputLabel } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleConfirm} edge="end" sx={{ color: COLORS.inputLabel }}>
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
              disabled={loading}
              sx={{
                mb: 3,
                borderRadius: 3,
                fontWeight: 'bold',
                textTransform: 'none',
                bgcolor: COLORS.accent,
                color: '#fff',
                '&:hover': {
                  bgcolor: '#76baff',
                },
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Sign Up'}
            </Button>
          </form>

          <Divider sx={{ my: 3, borderColor: '#ddd' }}>OR</Divider>

          <Stack spacing={2}>
            {[{ name: 'Google', icon: <FaGoogle /> }, { name: 'Microsoft', icon: <FaMicrosoft /> }].map(
              ({ name, icon }) => (
                <Button
                  key={name}
                  fullWidth
                  variant="outlined"
                  startIcon={icon}
                  onClick={() => handleSocialSignup(name)}
                  sx={{
                    borderColor: COLORS.outline,
                    color: COLORS.inputText,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: COLORS.buttonHover,
                      borderColor: COLORS.accent,
                    },
                  }}
                >
                  Sign up with {name}
                </Button>
              )
            )}
          </Stack>

          <Typography mt={4} textAlign="center" fontSize="0.9rem" sx={{ color: COLORS.inputLabel }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: COLORS.secondary, textDecoration: 'none' }}>
              Log in
            </Link>
          </Typography>
        </FormCard>
      </RightPanel>

      <Snackbar
        open={snack.open}
        autoHideDuration={4500}
        onClose={() => setSnack({ ...snack, open: false })}
        message={snack.message}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{
          sx: {
            bgcolor:
              snack.severity === 'success'
                ? COLORS.success
                : snack.severity === 'error'
                  ? COLORS.error
                  : COLORS.cardBg,
            color: '#fff',
            fontWeight: 500,
          },
        }}
      />
    </Container>
  );
}
