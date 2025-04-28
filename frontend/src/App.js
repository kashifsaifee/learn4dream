import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
<<<<<<< HEAD

import './App.css'; // Ensure you have global styles

import 'bootstrap/dist/css/bootstrap.min.css';


import Blogs from './Pages/Blogs'

// import Blogs from './Pages/Blogs';
=======
import Blogs from './Pages/Blogs';
>>>>>>> c7073628714e4fcd0b3393ac8bead425296a2a6a
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
