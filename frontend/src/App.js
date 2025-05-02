import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  return (
    <Router>
      {/* Navbar, passing isLoggedIn and setIsLoggedIn as props */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Changed /home to / */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Login and Signup, set isLoggedIn to true after successful login/signup */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

        {/* Profile page, can access directly if logged in */}
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
