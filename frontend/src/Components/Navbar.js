import React, { useState } from 'react';
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  );
};

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate(); // Added to handle redirection
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleLogout = () => {
    setIsLoggedIn(false); // set logged out
    navigate('/'); // Redirect to home page (with lowercase "h")
  };

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

            {/* Auth buttons (only shown if not logged in) */}
            {!isLoggedIn ? (
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
            ) : (
              <Button
                component={Link}
                to="/profile"
                variant="contained"
                sx={{ borderRadius: 25 }}
              >
                <CgProfile size={22} /> Profile
              </Button>
            )}

            {/* Logout button (only shown if logged in) */}
            {isLoggedIn && (
              <Button onClick={handleLogout} variant="outlined" color="secondary">
                Logout
              </Button>
            )}
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
              {!isLoggedIn ? (
                <>
                  <NavLinkBtn to="/login" closeMenu={close(setAnchorMobile)}>
                    Login
                  </NavLinkBtn>
                  <NavLinkBtn to="/signup" closeMenu={close(setAnchorMobile)}>
                    Sign Up
                  </NavLinkBtn>
                </>
              ) : (
                <NavLinkBtn to="/profile" closeMenu={close(setAnchorMobile)}>
                  Profile
                </NavLinkBtn>
              )}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
