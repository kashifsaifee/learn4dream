// Navbar.js

import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';  // Add styling for the navbar

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li> <Link to="/signup">Sign-up</Link> </li>
        <li> <Link to="/login">Login</Link> </li>
      </ul>
    </nav>
  );
};

export default Navbar;
