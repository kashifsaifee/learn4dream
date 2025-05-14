import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { CgProfile } from "react-icons/cg";

// Links
const courseLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/all-courses", label: "All Courses" },
  { to: "/course/detail", label: "Course Detail" },
];

const pageLinks = [
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
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

  const [showCourses, setShowCourses] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
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
    whiteSpace: "nowrap",
    position: "relative",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
  });

  const dropdownBoxStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    bgcolor: "#fff",
    boxShadow: 3,
    borderRadius: 2,
    zIndex: 1000,
    mt: 1,
    minWidth: 160,
    py: 1,
  };

  const renderDropdown = (links, closeFn) => (
    <Box sx={dropdownBoxStyle}>
      {links.map(({ to, label }) => (
        <Button
          key={to}
          component={Link}
          to={to}
          sx={{
            justifyContent: "flex-start",
            px: 2,
            py: 1,
            width: "100%",
            color: "#333",
            "&:hover": { backgroundColor: theme.palette.action.hover },
          }}
          onClick={closeFn}
        >
          {label}
        </Button>
      ))}
    </Box>
  );

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setMobileOpen(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>

        {[...courseLinks, ...pageLinks, { to: "/contact", label: "Contact" }]
          .map(({ to, label }) => (
            <ListItem button key={to} component={Link} to={to}>
              <ListItemText primary={label} />
            </ListItem>
          ))}

        {!isLoggedIn ? (
          authLinks.map(({ to, label }) => (
            <ListItem button key={to} component={Link} to={to}>
              <ListItemText primary={label} />
            </ListItem>
          ))
        ) : (
          <>
            {userLinks.map(({ to, label }) => (
              <ListItem button key={to} component={Link} to={to}>
                <ListItemText primary={label} />
              </ListItem>
            ))}
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" sx={{ color: "red" }} />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <Box
      onMouseLeave={() => {
        setShowCourses(false);
        setShowPages(false);
        setShowProfile(false);
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#fff",
          color: "#222",
          boxShadow: 3,
          width: { xs: "100%", md: "60%" },
          top: 0,
          left: { md: "50%" },
          transform: { md: "translateX(-30%)" },
          zIndex: 1300,
          borderRadius: { md: 1 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
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
            <span style={{ color: theme.palette.secondary.main, fontWeight: 900 }}>4</span>
            Dream
          </Typography>

          {/* Desktop Nav */}
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative" }}>
              <Button component={Link} to="/" sx={navButtonStyle("/")}>
                Home
              </Button>

              <Box sx={{ position: "relative" }}>
                <Button onClick={() => {
                  setShowCourses(!showCourses);
                  setShowPages(false);
                  setShowProfile(false);
                }} sx={navButtonStyle("/courses")}>
                  Courses
                </Button>
                {showCourses && renderDropdown(courseLinks, () => setShowCourses(false))}
              </Box>

              <Box sx={{ position: "relative" }}>
                <Button onClick={() => {
                  setShowPages(!showPages);
                  setShowCourses(false);
                  setShowProfile(false);
                }} sx={navButtonStyle("/blogs")}>
                  Pages
                </Button>
                {showPages && renderDropdown(pageLinks, () => setShowPages(false))}
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
                <Box sx={{ position: "relative" }}>
                  <IconButton onClick={() => {
                    setShowProfile(!showProfile);
                    setShowCourses(false);
                    setShowPages(false);
                  }} sx={{ ml: 1 }}>
                    <CgProfile size={26} />
                  </IconButton>
                  {showProfile && (
                    <Box sx={dropdownBoxStyle}>
                      {userLinks.map(({ to, label }) => (
                        <Button
                          key={to}
                          component={Link}
                          to={to}
                          sx={{
                            justifyContent: "flex-start",
                            px: 2,
                            py: 1,
                            width: "100%",
                            color: "#333",
                            "&:hover": {
                              backgroundColor: theme.palette.action.hover,
                            },
                          }}
                          onClick={() => setShowProfile(false)}
                        >
                          {label}
                        </Button>
                      ))}
                      <Divider />
                      <Button
                        onClick={() => {
                          handleLogout();
                          setShowProfile(false);
                        }}
                        sx={{
                          justifyContent: "flex-start",
                          px: 2,
                          py: 1,
                          width: "100%",
                          color: "red",
                        }}
                      >
                        Logout
                      </Button>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          ) : (
            // Mobile Nav
            <>
              <IconButton edge="end" color="inherit" onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
                {drawerList}
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
