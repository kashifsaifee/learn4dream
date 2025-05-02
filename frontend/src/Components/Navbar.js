import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, ExpandMore } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // State for dropdown menus
  const [anchorCourses, setAnchorCourses] = useState(null);
  const [anchorPages, setAnchorPages] = useState(null);
  const [anchorMobile, setAnchorMobile] = useState(null);

  // Helper functions for dropdowns
  const open = (set) => (e) => set(e.currentTarget);
  const close = (set) => () => set(null);

  // Style for active links
  const linkStyle = (path) => ({
    color: location.pathname === path 
      ? theme.palette.secondary.main 
      : theme.palette.primary.contrastText,
    '&:hover': {
      bgcolor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
    },
  });

  // Component for dropdown menu items
  const NavLinkBtn = ({ to, children, closeMenu }) => {
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
    );
  };

  // Check if the current page is Profile
  const isProfilePage = location.pathname === '/profile';

  return (
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Learn4Dream
        </Typography>

        {/* Desktop Menu */}
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

            {/* Conditional rendering for Login and SignUp */}
            {/* These buttons will not show when we are on Profile page */}
            {!isProfilePage && (
              <>
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
              </>
            )}

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

        {/* Mobile Menu */}
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
              {/* Conditional rendering for Login and SignUp */}
              {/* These buttons will not show when we are on Profile page */}
              {!isProfilePage && (
                <>
                  <NavLinkBtn to="/login" closeMenu={close(setAnchorMobile)}>
                    Login
                  </NavLinkBtn>
                  <NavLinkBtn to="/profile" closeMenu={close(setAnchorMobile)}>
                    Sign Up
                  </NavLinkBtn>
                </>
              )}
              <NavLinkBtn to="/profile" closeMenu={close(setAnchorMobile)}>
                Profile
              </NavLinkBtn>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
  