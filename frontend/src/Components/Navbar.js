import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';  // Hamburger icon
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
          <Button
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
          </Button>
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
          <Button
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
          </Button>
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
  );
};

export default Navbar;

