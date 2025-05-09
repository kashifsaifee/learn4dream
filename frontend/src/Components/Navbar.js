import React, { useState } from "react";
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
import { margin, width } from "@mui/system";
 
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
        px: 3,
        py: 1.2,
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(0, 123, 255, 0.08)",
          color: theme.palette.primary.main,
          transform: "scale(1.02)",
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
  const [anchorMobile, setAnchorMobile] = useState(null);
  const [anchorProfile, setAnchorProfile] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const menuProps = {
    TransitionComponent: Grow,
    PaperProps: {
      elevation: 4,
      sx: {
        borderRadius: 3,
        mt: 1,
        bgcolor: "#ffffff",
        boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
        minWidth: "180px",
        maxHeight: "300px",
        maxWidth: "100vw",
        overflowX: "hidden",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
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
      position="sticky"
      sx={{
        bgcolor: "transparent",
        color: "#333",
        boxShadow: 3,
        borderRadius: "12px",
        width: "60%",
        margin: "0 auto",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            fontWeight: 700,
            textDecoration: "none",
            color: theme.palette.primary.main,
          }}
        >
          Learn<span style={{ color: theme.palette.secondary.main }}>4</span>
          Dream
        </Typography>

        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button component={Link} to="/" sx={navButtonStyle("/")}>
              Home
            </Button>

            <Box onMouseEnter={(e) => setAnchorCourses(e.currentTarget)}>
              <Button endIcon={<ExpandMore />} sx={navButtonStyle("/courses")}>
                Courses
              </Button>
              <Menu
                anchorEl={anchorCourses}
                open={Boolean(anchorCourses)}
                onClose={() => setAnchorCourses(null)}
                {...menuProps}
              >
                <NavLinkBtn
                  to="/courses"
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
                      py: 1.2,
                      "&:hover": { bgcolor: "rgba(255,0,0,0.1)", color: "red" },
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        ) : (
          <>
            <IconButton
              color="inherit"
              onClick={(e) => setAnchorMobile(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorMobile}
              open={Boolean(anchorMobile)}
              onClose={() => setAnchorMobile(null)}
              {...menuProps}
            >
              <Typography sx={{ px: 2, py: 1, fontWeight: 600 }}>
                Menu
              </Typography>
              <Divider />
              <NavLinkBtn to="/" closeMenu={() => setAnchorMobile(null)}>
                Home
              </NavLinkBtn>
              <NavLinkBtn to="/courses" closeMenu={() => setAnchorMobile(null)}>
                All Courses
              </NavLinkBtn>
              <NavLinkBtn
                to="/course/detail"
                closeMenu={() => setAnchorMobile(null)}
              >
                Course Detail
              </NavLinkBtn>
              <NavLinkBtn to="/blogs" closeMenu={() => setAnchorMobile(null)}>
                Blogs
              </NavLinkBtn>
              <NavLinkBtn to="/about" closeMenu={() => setAnchorMobile(null)}>
                About
              </NavLinkBtn>
              <NavLinkBtn to="/contact" closeMenu={() => setAnchorMobile(null)}>
                Contact
              </NavLinkBtn>
              <Divider />
              {!isLoggedIn ? (
                <>
                  <NavLinkBtn
                    to="/login"
                    closeMenu={() => setAnchorMobile(null)}
                  >
                    Login
                  </NavLinkBtn>
                  <NavLinkBtn
                    to="/signup"
                    closeMenu={() => setAnchorMobile(null)}
                  >
                    Sign Up
                  </NavLinkBtn>
                </>
              ) : (
                <>
                  <NavLinkBtn
                    to="/profile"
                    closeMenu={() => setAnchorMobile(null)}
                  >
                    Profile
                  </NavLinkBtn>
                  <NavLinkBtn
                    to="/mycourses"
                    closeMenu={() => setAnchorMobile(null)}
                  >
                    My Courses
                  </NavLinkBtn>
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      setAnchorMobile(null);
                    }}
                  >
                    Logout
                  </MenuItem>
                </>
              )}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
 