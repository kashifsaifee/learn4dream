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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  // Updated isActive function: supports single path or array of paths
  const isActive = (paths) => {
    if (typeof paths === "string") {
      paths = [paths];
    }
    return paths.some((path) => {
      if (path === "/") {
        return location.pathname === "/";
      }
      return (
        location.pathname === path ||
        location.pathname.startsWith(path + "/")
      );
    });
  };

  const navButtonStyle = (pathOrPaths) => ({
    color: isActive(pathOrPaths) ? theme.palette.primary.main : "#222",
    fontWeight: isActive(pathOrPaths) ? 700 : 500,
    textTransform: "none",
    fontSize: "1rem",
    px: 2,
    py: 1,
    borderRadius: 2,
    position: "relative",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
    },
  });

  const dropdownStyle = {
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

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const renderDropdown = (links, closeFn) => (
    <Box sx={dropdownStyle}>
      {links.map(({ to, label }) => (
        <Button
          key={to}
          component={Link}
          to={to}
          onClick={closeFn}
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
        {[...courseLinks, ...pageLinks, { to: "/contact", label: "Contact" }].map(
          ({ to, label }) => (
            <ListItem button key={to} component={Link} to={to}>
              <ListItemText primary={label} />
            </ListItem>
          )
        )}
        <Divider />
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
        setDropdown(null);
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#fff",
          color: "#222",
          boxShadow: 3,
          width: { xs: "100%", md: "80%" },
          transform: { md: "translateX(-10%)" },
          left: { md: "50%" },
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
            <span style={{ color: theme.palette.secondary.main, fontWeight: 900 }}>
              4
            </span>
            Dream
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button component={Link} to="/" sx={navButtonStyle("/")}>
                Home
              </Button>

              {/* Courses Dropdown */}
              <Box sx={{ position: "relative" }}>
                <Button
                  onClick={() =>
                    setDropdown(dropdown === "courses" ? null : "courses")
                  }
                  sx={navButtonStyle(courseLinks.map(link => link.to))}
                  onMouseEnter={() => setDropdown("courses")}
                >
                  Courses
                </Button>
                {dropdown === "courses" &&
                  renderDropdown(courseLinks, () => setDropdown(null))}
              </Box>

              {/* Pages Dropdown */}
              <Box sx={{ position: "relative" }}>
                <Button
                  onClick={() =>
                    setDropdown(dropdown === "pages" ? null : "pages")
                  }
                  sx={navButtonStyle(pageLinks.map(link => link.to))}
                  onMouseEnter={() => setDropdown("pages")}
                >
                  Pages
                </Button>
                {dropdown === "pages" &&
                  renderDropdown(pageLinks, () => setDropdown(null))}
              </Box>

              <Button component={Link} to="/contact" sx={navButtonStyle("/contact")}>
                Contact
              </Button>

              {!isLoggedIn ? (
                <>
                  <Button component={Link} to="/login" sx={navButtonStyle("/login")}>
                    Login
                  </Button>
                  <Button component={Link} to="/signup" sx={navButtonStyle("/signup")}>
                    Sign-Up
                  </Button>
                </>
              ) : (
                <Box sx={{ position: "relative" }}>
                  <IconButton
                    onClick={() =>
                      setDropdown(dropdown === "profile" ? null : "profile")
                    }
                    sx={{ ml: 1 }}
                  >
                    <CgProfile size={26} />
                  </IconButton>
                  {dropdown === "profile" && (
                    <Box sx={dropdownStyle}>
                      {userLinks.map(({ to, label }) => (
                        <Button
                          key={to}
                          component={Link}
                          to={to}
                          onClick={() => setDropdown(null)}
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
                        >
                          {label}
                        </Button>
                      ))}
                      <Divider />
                      <Button
                        onClick={() => {
                          handleLogout();
                          setDropdown(null);
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
            <>
              <IconButton edge="end" onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
              >
                {drawerList}
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
