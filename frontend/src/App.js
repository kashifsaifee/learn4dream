import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Pages/Blogs';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import CourseDetail from './Pages/CourseDetail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (response) => {
    if (response) setIsLoggedIn(true);
  };

  return (
    <GoogleOAuthProvider clientId="your-client-id-here">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {/* Fixed Navbar */}
          <Box
            sx={{
              position: 'fixed',
              pt: 2,
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1300, // high z-index to float above content
              
            }}
          >
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </Box>

          {/* Page Content with top padding to offset fixed navbar height */}
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/detail" element={<CourseDetail />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />}
              />
              <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
              <Route
                path="/profile"
                element={
                  isLoggedIn ? (
                    <Profile />
                  ) : (
                    <Login setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />
                  )
                }
              />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
