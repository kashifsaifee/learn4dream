import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';  // Hamburger icon
import Dropdown from 'react-bootstrap/Dropdown';
import { useTheme } from '@mui/material/styles';  // To use the custom theme

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);  // For mobile menu
  const [activeLink, setActiveLink] = useState('/'); // To track active link
  const theme = useTheme(); // Accessing custom theme

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setAnchorEl(null); // Close mobile menu after clicking a link
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main }}>
      <Toolbar>
        {/* Logo/Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.primary.contrastText }}>
          Learn4Dream
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button
            component={Link}
            to="/"
            onClick={() => handleLinkClick('/')}
            sx={{
              color: activeLink === '/' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Home
          </Button>
          {/* <Button
            component={Link}
            to="/about"
            onClick={() => handleLinkClick('/about')}
            sx={{
              color: activeLink === '/about' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
              },
            }}
          >
            About
          </Button> */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Pages
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/services">Services</Dropdown.Item>
              <Dropdown.Item href="/about">About</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            component={Link}
            to="/courses"
            onClick={() => handleLinkClick('/courses')}
            sx={{
              color: activeLink === '/courses' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Courses
          </Button>
          {/* <Button
            component={Link}
            to="/services"
            onClick={() => handleLinkClick('/services')}
            sx={{
              color: activeLink === '/services' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Services
          </Button> */}
          <Button
            component={Link}
            to="/contact"
            onClick={() => handleLinkClick('/contact')}
            sx={{
              color: activeLink === '/contact' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile Menu Icon (Hamburger) */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuItem onClick={() => handleLinkClick('/')}>Home</MenuItem>
          <MenuItem onClick={() => handleLinkClick('/about')}>About</MenuItem>
          <MenuItem onClick={() => handleLinkClick('/courses')}>Courses</MenuItem>
          <MenuItem onClick={() => handleLinkClick('/services')}>Services</MenuItem>
          <MenuItem onClick={() => handleLinkClick('/contact')}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
=======
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, ExpandMore } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { CgProfile } from "react-icons/cg";


/* ---------- NavLinkBtn for dropdown items ---------- */
const NavLinkBtn = ({ to, children, closeMenu }) => {
  const theme = useTheme();
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <MenuItem
      component={Link}
      to={to}
      onClick={closeMenu}
      sx={{
        color: active ? theme.palette.secondary.main : 'text.primary',
        fontWeight: active ? 'bold' : 'normal',
      }}
    >
      {children}
    </MenuItem>
>>>>>>> c7073628714e4fcd0b3393ac8bead425296a2a6a
  );
};

export default Navbar;

<<<<<<< HEAD
=======
  // anchor states for dropdowns
  const [anchorCourses, setAnchorCourses] = useState(null);
  const [anchorPages, setAnchorPages] = useState(null);
  const [anchorMobile, setAnchorMobile] = useState(null);

  const open = (set) => (e) => set(e.currentTarget);
  const close = (set) => () => set(null);

  const linkStyle = (path) => ({
    color:
      location.pathname === path
        ? theme.palette.secondary.main
        : theme.palette.primary.contrastText,
    '&:hover': {
      bgcolor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
    },
  });

  /* ---------- Layout ---------- */
  return (
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Learn4Dream
        </Typography>

        {/* ======= Desktop menu ======= */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button component={Link} to="/" sx={linkStyle('/')}>
              Home
            </Button>

            {/* Courses Dropdown */}
            <Button
              endIcon={<ExpandMore />}
              onClick={open(setAnchorCourses)}
              sx={linkStyle('/courses')}
            >
              Courses
            </Button>
            <Menu
              anchorEl={anchorCourses}
              open={Boolean(anchorCourses)}
              onClose={close(setAnchorCourses)}
            >
              <NavLinkBtn to="/courses" closeMenu={close(setAnchorCourses)}>
                All Courses
              </NavLinkBtn>
              <NavLinkBtn to="/courses/detail" closeMenu={close(setAnchorCourses)}>
                Course Detail
              </NavLinkBtn>
            </Menu>

            {/* Pages Dropdown */}
            <Button
              endIcon={<ExpandMore />}
              onClick={open(setAnchorPages)}
              sx={linkStyle('/blogs')}
            >
              Pages
            </Button>
            <Menu
              anchorEl={anchorPages}
              open={Boolean(anchorPages)}
              onClose={close(setAnchorPages)}
            >
              <NavLinkBtn to="/blogs" closeMenu={close(setAnchorPages)}>
                Blogs
              </NavLinkBtn>
              <NavLinkBtn to="/about" closeMenu={close(setAnchorPages)}>
                About
              </NavLinkBtn>
            </Menu>

            <Button component={Link} to="/contact" sx={linkStyle('/contact')}>
              Contact
            </Button>

            {/* Auth buttons */}
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: 2 }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 2 }}
            >
              Sign Up
            </Button>
            <Button
              component={Link}
              to="/profile"
              variant="contained"
              sx={{ borderRadius: 25 }}
            >
            <CgProfile size={22} />
            </Button>
          </Box>
        )}

        {/* ======= Mobile hamburger ======= */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={open(setAnchorMobile)}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorMobile}
              open={Boolean(anchorMobile)}
              onClose={close(setAnchorMobile)}
            >
              <NavLinkBtn to="/" closeMenu={close(setAnchorMobile)}>
                Home
              </NavLinkBtn>
              <NavLinkBtn to="/courses" closeMenu={close(setAnchorMobile)}>
                All Courses
              </NavLinkBtn>
              <NavLinkBtn to="/courses/detail" closeMenu={close(setAnchorMobile)}>
                Course Detail
              </NavLinkBtn>
              <NavLinkBtn to="/blogs" closeMenu={close(setAnchorMobile)}>
                Blogs
              </NavLinkBtn>
              <NavLinkBtn to="/about" closeMenu={close(setAnchorMobile)}>
                About
              </NavLinkBtn>
              <NavLinkBtn to="/contact" closeMenu={close(setAnchorMobile)}>
                Contact
              </NavLinkBtn>
              <Divider />
              <NavLinkBtn to="/login" closeMenu={close(setAnchorMobile)}>
                Login
              </NavLinkBtn>
              <NavLinkBtn to="/signup" closeMenu={close(setAnchorMobile)}>
                Sign Up
              </NavLinkBtn>
              <NavLinkBtn to="/profile" closeMenu={close(setAnchorMobile)}>
                Profile
              </NavLinkBtn>

            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
>>>>>>> c7073628714e4fcd0b3393ac8bead425296a2a6a
