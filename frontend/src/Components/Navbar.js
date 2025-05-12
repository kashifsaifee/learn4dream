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
        bgcolor: "#fff",
        minWidth: 180,
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
      position="sticky"
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
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
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

            <Box onMouseEnter={(e) => setAnchorCourses(e.currentTarget)}>
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
                open={Boolean(anchorCourses)}
                onClose={() => setAnchorCourses(null)}
                {...menuProps}
              >
                {courseLinks.map(({ to, label }) => (
                  <NavLinkBtn key={to} to={to} closeMenu={() => setAnchorCourses(null)}>
                    {label}
                  </NavLinkBtn>
                ))}
              </Menu>
            </Box>

            <Box onMouseEnter={(e) => setAnchorPages(e.currentTarget)}>
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
                open={Boolean(anchorPages)}
                onClose={() => setAnchorPages(null)}
                {...menuProps}
              >
                {pageLinks.map(({ to, label }) => (
                  <NavLinkBtn key={to} to={to} closeMenu={() => setAnchorPages(null)}>
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
                    sx={{
                      px: 3,
                      py: 1.2,
                      color: "red",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "rgba(255,0,0,0.08)" },
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
              color="primary"
              onClick={(e) => setAnchorMobile(e.currentTarget)}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorMobile}
              open={Boolean(anchorMobile)}
              onClose={() => setAnchorMobile(null)}
              {...menuProps}
              PaperProps={{
                ...menuProps.PaperProps,
                sx: { ...menuProps.PaperProps.sx, minWidth: 200 },
              }}
            >
              <Typography
                sx={{
                  px: 2,
                  py: 1,
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                Menu
              </Typography>
              <Divider />
              {mobileLinks.map(({ to, label }) => (
                <NavLinkBtn key={to} to={to} closeMenu={() => setAnchorMobile(null)}>
                  {label}
                </NavLinkBtn>
              ))}
              <Divider />
              {!isLoggedIn
                ? authLinks.map(({ to, label }) => (
                    <NavLinkBtn key={to} to={to} closeMenu={() => setAnchorMobile(null)}>
                      {label}
                    </NavLinkBtn>
                  ))
                : (
                  <>
                    {userLinks.map(({ to, label }) => (
                      <NavLinkBtn key={to} to={to} closeMenu={() => setAnchorMobile(null)}>
                        {label}
                      </NavLinkBtn>
                    ))}
                    <MenuItem
                      onClick={() => {
                        handleLogout();
                        setAnchorMobile(null);
                      }}
                      sx={{
                        color: "red",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "rgba(255,0,0,0.08)" },
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
