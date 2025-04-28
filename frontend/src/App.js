import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

import './App.css'; // Ensure you have global styles

import 'bootstrap/dist/css/bootstrap.min.css';


import Blogs from './Pages/Blogs'

// import Blogs from './Pages/Blogs';
import Signup from './Pages/Signup';
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
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
