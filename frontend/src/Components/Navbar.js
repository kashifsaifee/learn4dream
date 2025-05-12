import React, { useState, useEffect } from "react";
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
        color: active ? theme.palette.primary.main : "#333",
        fontWeight: active ? "bold" : 500,
        px: 2,
        py: 1.2,
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(0, 123, 255, 0.08)",
          color: theme.palette.primary.main,
          transform: "scale(1.05)",
        },
      }}
    >
      {children}
    </MenuItem>
  );
};

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorCourses, setAnchorCourses] = useState(null);
  const [anchorPages, setAnchorPages] = useState(null);
  const [anchorobile, setAnchorMobile] = useState(null);
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
        mt: 2,
        bgcolor: "#ffffff",
        boxShadow: "0px 3px 8px rgba(0,0,0,0.3)",
        minWidth: "120px",
        maxWidth: "80vw",
        overflowX: "hidden",
        
        "& .MuiMenuItem-root": {
          px: 2,
          py: 1,
          color: "#000",
         // transition: "background-color 0.2s ease",
          "&:hover": {
            bgcolor: "#e3f2fd",
            color: "#1976d2",
          },
        },
      },
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
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
      : "#333",
    fontWeight: location.pathname.startsWith(path) ? "bold" : 500,
    textTransform: "none",
    fontSize: "1rem",
    px: 2,
    py: 1,
    borderRadius: 2,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(0, 123, 255, 0.08)",
      color: theme.palette.primary.main,
      transform: "scale(1.05)",
    },
  });

  return (
    <AppBar
      position="Sticky"
      sx={{
        bgcolor: "transparent",
        color: "#333",
        boxShadow: 3,
        borderRadius: "12px",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        backdropFilter: "blur(10px)",
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
            fontWeight: 700,
            textDecoration: "none",
            color: theme.palette.primary.main,
            overflow: "hidden",
          }}
        >
          Learn<span style={{ color: theme.palette.secondary.main }}>4</span>
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

            <Box
              onMouseEnter={(e) => {
                setAnchorCourses(e.currentTarget);
                setDropdownVisible(true);
              }}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <Button endIcon={<ExpandMore />} sx={navButtonStyle("/courses")}>
                Courses
              </Button>
              <Menu
                anchorEl={anchorCourses}
                open={Boolean(anchorCourses) && dropdownVisible}
                onClose={() => setAnchorCourses(null)}
                {...menuProps}
              >
                <NavLinkBtn
                  to="/courses"
                  closeMenu={() => setAnchorCourses(null)}
                >
                  Courses
                </NavLinkBtn>
                <NavLinkBtn
                  to="/all-courses"
                  closeMenu={() => setAnchorCourses(null)}
                >
                  All Courses
                </NavLinkBtn>
                <NavLinkBtn
                  to="/course/detail"
                  closeMenu={() => setAnchorCourses(null)}
                >
                  Course Detail
                </NavLinkBtn>
              </Menu>
            </Box>

            <Box onMouseEnter={(e) => setAnchorPages(e.currentTarget)}>
              <Button endIcon={<ExpandMore />} sx={navButtonStyle("/blogs")}>
                Pages
              </Button>
              <Menu
                anchorEl={anchorPages}
                open={Boolean(anchorPages)}
                onClose={() => setAnchorPages(null)}
                {...menuProps}
              >
                <NavLinkBtn to="/blogs" closeMenu={() => setAnchorPages(null)}>
                  Blogs
                </NavLinkBtn>
                <NavLinkBtn to="/about" closeMenu={() => setAnchorPages(null)}>
                  About
                </NavLinkBtn>
              </Menu>
            </Box>

            <Button
              component={Link}
              to="/contact"
              sx={navButtonStyle("/contact")}
            >
              Contact
            </Button>

            {!isLoggedIn ? (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  color="primary"
                  sx={{ borderRadius: 3 }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: 3 }}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <IconButton
                  onClick={(e) => setAnchorProfile(e.currentTarget)}
                  sx={{ color: theme.palette.primary.main }}
                >
                  <CgProfile size={24} />
                </IconButton>
                <Menu
                  anchorEl={anchorProfile}
                  open={Boolean(anchorProfile)}
                  onClose={() => setAnchorProfile(null)}
                  {...menuProps}
                >
                  <NavLinkBtn
                    to="/profile"
                    closeMenu={() => setAnchorProfile(null)}
                  >
                    Profile
                  </NavLinkBtn>
                  <NavLinkBtn
                    to="/mycourses"
                    closeMenu={() => setAnchorProfile(null)}
                  >
                    My Courses
                  </NavLinkBtn>
                  <Divider sx={{ my: 1 }} />
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      setAnchorProfile(null);
                    }}
                    sx={{
                      px: 3,
                      py: 1.5,
                      "&:hover": {
                        bgcolor: "rgba(255,0,0,0.1)",
                        color: "red",
                      },
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        ) : (
          <IconButton
            color="inherit"
            onClick={(e) => setAnchorMobile(e.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
