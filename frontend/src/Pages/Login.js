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
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  CircularProgress,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Typography,
  Snackbar,
} from '@mui/material';
import styled from 'styled-components';

// === Color Palette Consistent with Signin.js ===
const PRIMARY_BG = '#0f274a';
const CARD_BG = '#fff';
const ACCENT = '#FFA559';
const TEXT_PRIMARY = '#0f274a';
const TEXT_SECONDARY = '#555';
const INPUT_BG = '#f5f7fa';

// === Reusable Input Style ===
const inputStyles = {
  mb: 3,
  input: { color: TEXT_PRIMARY },
  '.MuiFilledInput-root': {
    bgcolor: INPUT_BG,
    borderRadius: '12px',
  },
};

// === Styled Components ===
const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${PRIMARY_BG};
  color: ${TEXT_PRIMARY};
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #ffa559 0%, #ffe6c7 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const RightSection = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${PRIMARY_BG};
`;

const Card = styled.div`
  background-color: ${CARD_BG};
  padding: 32px;
  border-radius: 18px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  color: ${TEXT_PRIMARY};
`;

const SocialButton = styled(Button)`
  color: ${TEXT_PRIMARY};
  border-color: #ccc;
  background: #fff;
  text-transform: none;
  font-weight: 500;

  &:hover {
    background-color: #fff7f0;
    border-color: ${ACCENT};
  }
`;

export default function Login({ setIsLoggedIn }) {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      '.login-card',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const togglePwd = () => setShowPwd(!showPwd);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
        navigate('/');
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Try again later.');
    } finally {
      setOpenSnackbar(true);
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <Container>
      <LeftSection>
        <Typography variant="h3" color={PRIMARY_BG} fontWeight="bold" gutterBottom>
          Welcome to Learn4Dream
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 400, color: TEXT_SECONDARY }}>
          Access personalized learning, track progress, and grow with our intuitive platform.
        </Typography>
      </LeftSection>

      <RightSection
        className="login-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3} color={ACCENT}>
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
              sx={inputStyles}
              InputLabelProps={{ style: { color: TEXT_SECONDARY } }}
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
              sx={{ ...inputStyles, mb: 4 }}
              InputLabelProps={{ style: { color: TEXT_SECONDARY } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePwd} edge="end" sx={{ color: TEXT_PRIMARY }}>
                      {showPwd ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                bgcolor: ACCENT,
                color: PRIMARY_BG,
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 3,
                '&:hover': {
                  bgcolor: '#ffb877',
                },
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} sx={{ color: PRIMARY_BG }} /> : 'Log In'}
            </Button>
          </form>

          <Typography mt={3} textAlign="center" fontSize="0.9rem" color={TEXT_SECONDARY}>
            Don’t have an account?{' '}
            <Link to="/signup" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>
              Sign up
            </Link>
          </Typography>

          <Stack spacing={2} mt={4}>
            <SocialButton
              fullWidth
              variant="outlined"
              onClick={() => handleSocialLogin('Google')}
              startIcon={<FaGoogle />}
            >
              Continue with Google
            </SocialButton>

            <SocialButton
              fullWidth
              variant="outlined"
              onClick={() => handleSocialLogin('Microsoft')}
              startIcon={<FaMicrosoft />}
            >
              Continue with Microsoft
            </SocialButton>
          </Stack>
        </Card>
      </RightSection>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={successMessage || error}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Container>
  );
}
