import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const location = useLocation(); // Get the current path for active link styling

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.primary.contrastText }}>
          Learn4Dream
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: location.pathname === '/' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
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
            sx={{
              color: location.pathname === '/about' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
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
            sx={{
              color: location.pathname === '/courses' ? 'orange' : theme.palette.primary.contrastText,  // Orange for active state
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: 'orange',
              },
            }}
          >
            Courses
          </Button>
          <Button
            component={Link}
            to="/blogs"
            sx={{
              color: location.pathname === '/blogs' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Blogs
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: location.pathname === '/contact' ? theme.palette.secondary.main : theme.palette.primary.contrastText,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                color: theme.palette.secondary.main,
              },
            }}
          >
            Contact
          </Button>
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuItem onClick={() => handleMenuClose()}>Home</MenuItem>
          <MenuItem onClick={() => handleMenuClose()}>About</MenuItem>
          <MenuItem onClick={() => handleMenuClose()}>Courses</MenuItem>
          <MenuItem onClick={() => handleMenuClose()}>Blogs</MenuItem>
          <MenuItem onClick={() => handleMenuClose()}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navbar;
