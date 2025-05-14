import { useState } from "react";
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
  Grow,
} from "@mui/material";
import { Menu as MenuIcon, ExpandMore } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { CgProfile } from "react-icons/cg";
import React, { useEffect } from 'react';

// Reusable navigation link component
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
        color: active ? theme.palette.primary.main : "#222",
        fontWeight: active ? 700 : 500,
        px: 3,
        py: 1.2,
        borderRadius: 2,
        transition: "all 0.2s",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          color: theme.palette.primary.main,
        },
      }}
    >
      {children}
    </MenuItem>
  );
};

// Menu structure
const courseLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/all-courses", label: "All Courses" },
  { to: "/course/detail", label: "Course Detail" },
];

const pageLinks = [
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
];

const mobileLinks = [
  { to: "/", label: "Home" },
  ...courseLinks,
  ...pageLinks,
  { to: "/contact", label: "Contact" },
];

const authLinks = [
  { to: "/login", label: "Login" },
  { to: "/signup", label: "Sign Up" },
];

const userLinks = [
  { to: "/profile", label: "Profile" },
  { to: "/mycourses", label: "My Courses" },
];

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorCourses, setAnchorCourses] = useState(null);
  const [anchorPages, setAnchorPages] = useState(null);
  const [anchorMobile, setAnchorMobile] = useState(null);
  const [anchorProfile, setAnchorProfile] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // 🔥 Close dropdowns on scroll
  useEffect(() => {
    const handleScroll = () => {
      setAnchorCourses(null);
      setAnchorPages(null);
      setAnchorProfile(null);
      setDropdownVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const menuProps = {
    TransitionComponent: Grow,
    PaperProps: {
      elevation: 3,
      sx: {
        borderRadius: 3,
        mt: 1,
        bgcolor: "#fff",
        minWidth: 160,
        maxwidth: 300,
        position: "absolute",
        right: 0,
        maxHeight: 320,
        boxShadow: "0px 3px 12px rgba(0,0,0,0.08)",
      },
    },
    anchorOrigin: { vertical: "bottom", horizontal: "left" },
    transformOrigin: { vertical: "top", horizontal: "left" },
    MenuListProps: {
      onMouseLeave: () => {
        setAnchorCourses(null);
        setAnchorPages(null);
      },
    },
  };

  const navButtonStyle = (path) => ({
    color: location.pathname.startsWith(path)
      ? theme.palette.primary.main
      : "#222",
    fontWeight: location.pathname.startsWith(path) ? 700 : 500,
    textTransform: "none",
    fontSize: "1rem",
    px: 2,
    py: 1,
    borderRadius: 2,
    transition: "all 0.2s",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
  });

  return (
    <AppBar
      position="Sticky"
      sx={{
        bgcolor: "#fff",
        color: "#222",
        boxShadow: 3,
        borderRadius: 3,
        width: { xs: "98%", sm: "90%", md: "70%" },
        mx: "auto",
        mt: 1,
        backdropFilter: "blur(8px)",
        overflow: "hidden",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            fontWeight: 800,
            textDecoration: "none",
            color: theme.palette.primary.main,
            letterSpacing: 1,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          Learn
          <span style={{ color: theme.palette.secondary.main, fontWeight: 900 }}>
            4
          </span>
          Dream
        </Typography>

        {!isMobile ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              maxWidth: "100%",
            }}
          >
            <Button component={Link} to="/" sx={navButtonStyle("/")}>
              Home
            </Button>

            {/* Courses Dropdown */}
            <Box
              onMouseEnter={(e) => {
                setAnchorCourses(e.currentTarget);
                setDropdownVisible(true);
              }}
              onMouseLeave={() => {
                setAnchorCourses(null);
                setDropdownVisible(false);
              }}
            >
              <Button
                endIcon={<ExpandMore />}
                sx={navButtonStyle("/courses")}
                aria-controls="courses-menu"
                aria-haspopup="true"
              >
                Courses
              </Button>
              <Menu
                id="courses-menu"
                anchorEl={anchorCourses}
                open={Boolean(anchorCourses) && dropdownVisible}
                onClose={() => {
                  setAnchorCourses(null);
                  setDropdownVisible(false);
                }}
                {...menuProps}
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => {
                  setAnchorCourses(null);
                  setDropdownVisible(false);
                }}
              >
                {courseLinks.map(({ to, label }) => (
                  <NavLinkBtn key={to} to={to} closeMenu={() => {
                    setAnchorCourses(null);
                    setDropdownVisible(false);
                  }}>
                    {label}
                  </NavLinkBtn>
                ))}
              </Menu>
            </Box>

            {/* Pages Dropdown */}
            <Box
              onMouseEnter={(e) => {
                setAnchorPages(e.currentTarget);
                setDropdownVisible(true);
              }}
              onMouseLeave={() => {
                setAnchorPages(null);
                setDropdownVisible(false);
              }}
            >
              <Button
                endIcon={<ExpandMore />}
                sx={navButtonStyle("/blogs")}
                aria-controls="pages-menu"
                aria-haspopup="true"
              >
                Pages
              </Button>
              <Menu
                id="pages-menu"
                anchorEl={anchorPages}
                open={Boolean(anchorPages) && dropdownVisible}
                onClose={() => {
                  setAnchorPages(null);
                  setDropdownVisible(false);
                }}
                {...menuProps}
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => {
                  setAnchorPages(null);
                  setDropdownVisible(false);
                }}
              >
                {pageLinks.map(({ to, label }) => (
                  <NavLinkBtn key={to} to={to} closeMenu={() => {
                    setAnchorPages(null);
                    setDropdownVisible(false);
                  }}>
                    {label}
                  </NavLinkBtn>
                ))}
              </Menu>
            </Box>

            <Button component={Link} to="/contact" sx={navButtonStyle("/contact")}>
              Contact
            </Button>

            {!isLoggedIn ? (
              authLinks.map(({ to, label }) => (
                <Button
                  key={to}
                  component={Link}
                  to={to}
                  variant={label === "Sign Up" ? "contained" : "outlined"}
                  color="primary"
                  sx={{ borderRadius: 2, ml: 1 }}
                >
                  {label}
                </Button>
              ))
            ) : (
              <>
                <IconButton
                  onClick={(e) => setAnchorProfile(e.currentTarget)}
                  sx={{ color: theme.palette.primary.main, ml: 1 }}
                >
                  <CgProfile size={26} />
                </IconButton>
                <Menu
                  anchorEl={anchorProfile}
                  open={Boolean(anchorProfile)}
                  onClose={() => setAnchorProfile(null)}
                  {...menuProps}
                >
                  {userLinks.map(({ to, label }) => (
                    <NavLinkBtn key={to} to={to} closeMenu={() => setAnchorProfile(null)}>
                      {label}
                    </NavLinkBtn>
                  ))}
                  <Divider sx={{ my: 1 }} />
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      setAnchorProfile(null);
                    }}
                    sx={{ color: "red" }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        ) : (
          <IconButton
            sx={{ color: theme.palette.primary.main }}
            onClick={() => setAnchorMobile((prev) => (prev ? null : true))}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
