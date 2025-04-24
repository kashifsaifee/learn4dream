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
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

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

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // anchor states for dropdowns
  const [anchorCourses, setAnchorCourses] = useState(null);
  const [anchorPages, setAnchorPages] = useState(null);
  const [anchorMobile, setAnchorMobile] = useState(null);

  const open = (setter) => (e) => setter(e.currentTarget);
  const close = (setter) => () => setter(null);

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

  return (
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main }}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Learn4Dream
        </Typography>

        {/* ----------- Desktop Menu ----------- */}
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
              MenuListProps={{ dense: true }}
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
              MenuListProps={{ dense: true }}
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

            {/* Auth Buttons */}
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: 2, ml: 1 }}
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
              Sign&nbsp;up
            </Button>
          </Box>
        )}

        {/* ----------- Mobile Hamburger ----------- */}
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
                Sign-up
              </NavLinkBtn>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
