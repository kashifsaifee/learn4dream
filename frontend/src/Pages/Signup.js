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
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
  Stack,
  Snackbar,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #121212;
`;

const LeftPanel = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

const RightPanel = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 440px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  color: white;
`;

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }

      setSnack({ open: true, message: 'Signup successful!', severity: 'success' });
      setTimeout(() => navigate('/profile'), 1500);
    } catch (err) {
      setSnack({ open: true, message: err.response?.data?.message || 'Signup failed.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
  };

  return (
    <Container>
      <LeftPanel>
        <Typography variant="h3" fontWeight="bold" mb={2}>
          Start Your Learning
        </Typography>
        <Typography variant="body1" fontSize="1.1rem">
          Unlock access to premium courses, expert instructors, and a community of learners.
        </Typography>
      </LeftPanel>

      <RightPanel
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FormWrapper>
          <Typography variant="h4" fontWeight="bold" mb={3} color="#FFA559" textAlign="center">
            Sign Up
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
              sx={{ mb: 3, input: { color: 'white' }, '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)', borderRadius: '12px' } }}
              InputLabelProps={{ style: { color: '#ccc' } }}
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
              sx={{ mb: 3, input: { color: 'white' }, '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)', borderRadius: '12px' } }}
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
              sx={{ mb: 3, input: { color: 'white' }, '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)', borderRadius: '12px' } }}
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePwd} edge="end" sx={{ color: 'white' }}>
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
              sx={{ mb: 3, input: { color: 'white' }, '.MuiFilledInput-root': { bgcolor: 'rgba(255,255,255,0.08)', borderRadius: '12px' } }}
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleConfirm} edge="end" sx={{ color: 'white' }}>
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
              disabled={loading}
              sx={{ borderRadius: 3, fontWeight: 'bold', textTransform: 'none', mb: 3 }}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>

          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }}>OR</Divider>

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
            <Link to="/login" style={{ color: '#FFA559', textDecoration: 'none' }}>
              Log in
            </Link>
          </Typography>
        </FormWrapper>
      </RightPanel>

      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={() => setSnack({ ...snack, open: false })}
        message={snack.message}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Container>
  );
}
