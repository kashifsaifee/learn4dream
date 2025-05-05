import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Login from './Pages/Login';


import './App.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';


import Blogs from './Pages/Blogs'


import Signup from './Pages/Signup';
import Profile from './Pages/Profile';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle successful login
  const handleLogin = (response) => {
    if (response) {
      // Set login state to true after successful login
      setIsLoggedIn(true);
      // Optionally, you can send the response to the backend for verification and session management
    }
  };

  return (
    <GoogleOAuthProvider clientId="1067901061847-tauajhhu2ckbdb6lqdsk42pq939ihu4f.apps.googleusercontent.com">
      <Router>
        {/* Navbar, passing isLoggedIn and setIsLoggedIn as props */}
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />

          {/* Login and Signup */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

          {/* Profile (redirects to login if not logged in) */}
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} handleLogin={handleLogin} />}
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
