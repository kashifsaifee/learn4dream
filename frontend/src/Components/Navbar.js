// // import React, { useState } from 'react';
// // import {
// //   AppBar,
// //   Toolbar,
// //   Typography,
// //   Button,
// //   Box,
// //   IconButton,
// //   Menu,
// //   MenuItem,
// //   Divider,
// //   useMediaQuery,
// // } from '@mui/material';
// // import { Menu as MenuIcon, ExpandMore } from '@mui/icons-material';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';
// // import { useTheme } from '@mui/material/styles';
// // import { CgProfile } from "react-icons/cg";

// // const NavLinkBtn = ({ to, children, closeMenu }) => {
// //   const theme = useTheme();
// //   const location = useLocation();
// //   const active = location.pathname === to;

// //   return (
// //     <MenuItem
// //       component={Link}
// //       to={to}
// //       onClick={closeMenu}
// //       sx={{
// //         color: active ? theme.palette.secondary.main : 'text.primary',
// //         fontWeight: active ? 'bold' : 'normal',
// //       }}
// //     >
// //       {children}
// //     </MenuItem>
// //   );
// // };

// // export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
// //   const theme = useTheme();
// //   const location = useLocation();
// //   const navigate = useNavigate(); // Added to handle redirection
// //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

// //   // anchor states for dropdowns
// //   const [anchorCourses, setAnchorCourses] = useState(null);
// //   const [anchorPages, setAnchorPages] = useState(null);
// //   const [anchorMobile, setAnchorMobile] = useState(null);

// //   const open = (set) => (e) => set(e.currentTarget);
// //   const close = (set) => () => set(null);

// //   const linkStyle = (path) => ({
// //     color:
// //       location.pathname === path
// //         ? theme.palette.secondary.main
// //         : theme.palette.primary.contrastText,
// //     '&:hover': {
// //       bgcolor: theme.palette.primary.dark,
// //       color: theme.palette.secondary.main,
// //     },
// //   });

// //   const handleLogout = () => {
// //     setIsLoggedIn(false); // set logged out
// //     navigate('/'); // Redirect to home page (with lowercase "h")
// //   };

// //   return (
// //     <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main }}>
// //       <Toolbar sx={{ gap: 2 }}>
// //         <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //           Learn4Dream
// //         </Typography>

// //         {/* ======= Desktop menu ======= */}
// //         {!isMobile && (
// //           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //             <Button component={Link} to="/" sx={linkStyle('/')}>
// //               Home
// //             </Button>

// //             {/* Courses Dropdown */}
// //             <Button
// //               endIcon={<ExpandMore />}
// //               onClick={open(setAnchorCourses)}
// //               sx={linkStyle('/courses')}
// //             >
// //               Courses
// //             </Button>
// //             <Menu
// //               anchorEl={anchorCourses}
// //               open={Boolean(anchorCourses)}
// //               onClose={close(setAnchorCourses)}
// //             >
// //               <NavLinkBtn to="/courses" closeMenu={close(setAnchorCourses)}>
// //                 All Courses
// //               </NavLinkBtn>
// //               <NavLinkBtn to="/courses/detail" closeMenu={close(setAnchorCourses)}>
// //                 Course Detail
// //               </NavLinkBtn>
// //             </Menu>

// //             {/* Pages Dropdown */}
// //             <Button
// //               endIcon={<ExpandMore />}
// //               onClick={open(setAnchorPages)}
// //               sx={linkStyle('/blogs')}
// //             >
// //               Pages
// //             </Button>
// //             <Menu
// //               anchorEl={anchorPages}
// //               open={Boolean(anchorPages)}
// //               onClose={close(setAnchorPages)}
// //             >
// //               <NavLinkBtn to="/blogs" closeMenu={close(setAnchorPages)}>
// //                 Blogs
// //               </NavLinkBtn>
// //               <NavLinkBtn to="/about" closeMenu={close(setAnchorPages)}>
// //                 About
// //               </NavLinkBtn>
// //             </Menu>

// //             <Button component={Link} to="/contact" sx={linkStyle('/contact')}>
// //               Contact
// //             </Button>

// //             {/* Auth buttons (only shown if not logged in) */}
// //             {!isLoggedIn ? (
// //               <>
// //                 <Button
// //                   component={Link}
// //                   to="/login"
// //                   variant="outlined"
// //                   color="secondary"
// //                   sx={{ borderRadius: 2 }}
// //                 >
// //                   Login
// //                 </Button>
// //                 <Button
// //                   component={Link}
// //                   to="/signup"
// //                   variant="contained"
// //                   color="secondary"
// //                   sx={{ borderRadius: 2 }}
// //                 >
// //                   Sign Up
// //                 </Button>
// //               </>
// //             ) : (
// //               <Button
// //                 component={Link}
// //                 to="/profile"
// //                 variant="contained"
// //                 sx={{ borderRadius: 25 }}
// //               >
// //                 <CgProfile size={22} />
// //               </Button>
// //             )}

// //             {/* Logout button (only shown if logged in) */}
// //             {isLoggedIn && (
// //               <Button onClick={handleLogout} variant="outlined" color="secondary">
// //                 Logout
// //               </Button>
// //             )}
// //           </Box>
// //         )}

// //         {/* ======= Mobile hamburger ======= */}
// //         {isMobile && (
// //           <>
// //             <IconButton color="inherit" onClick={open(setAnchorMobile)}>
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               anchorEl={anchorMobile}
// //               open={Boolean(anchorMobile)}
// //               onClose={close(setAnchorMobile)}
// //             >
// //               <NavLinkBtn to="/" closeMenu={close(setAnchorMobile)}>
// //                 Home
// //               </NavLinkBtn>
// //               <NavLinkBtn to="/courses" closeMenu={close(setAnchorMobile)}>
// //                 All Courses
// //               </NavLinkBtn>
// //               <NavLinkBtn to="/courses/detail" closeMenu={close(setAnchorMobile)}>
// //                 Course Detail
// //               </NavLinkBtn>
// //               <NavLinkBtn to="/blogs" closeMenu={close(setAnchorMobile)}>
// //                 Blogs
// //               </NavLinkBtn>
// //               <NavLinkBtn to="/about" closeMenu={close(setAnchorMobile)}>
// //                 About
// //               </NavLinkBtn>
// //               <NavLinkBtn to="/contact" closeMenu={close(setAnchorMobile)}>
// //                 Contact
// //               </NavLinkBtn>
// //               <Divider />
// //               {!isLoggedIn ? (
// //                 <>
// //                   <NavLinkBtn to="/login" closeMenu={close(setAnchorMobile)}>
// //                     Login
// //                   </NavLinkBtn>
// //                   <NavLinkBtn to="/signup" closeMenu={close(setAnchorMobile)}>
// //                     Sign Up
// //                   </NavLinkBtn>
// //                 </>
// //               ) : (
// //                 <NavLinkBtn to="/profile" closeMenu={close(setAnchorMobile)}>
// //                   Profile
// //                 </NavLinkBtn>
// //               )}
// //             </Menu>
// //           </>
// //         )}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // }

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
//   Divider,
//   useMediaQuery,
// } from '@mui/material';
// import { Menu as MenuIcon, ExpandMore } from '@mui/icons-material';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import { CgProfile } from 'react-icons/cg';

// const NavLinkBtn = ({ to, children, closeMenu }) => {
//   const theme = useTheme();
//   const location = useLocation();
//   const active = location.pathname === to;

//   return (
//     <MenuItem
//       component={Link}
//       to={to}
//       onClick={closeMenu}
//       sx={{
//         color: active ? theme.palette.secondary.main : 'text.primary',
//         fontWeight: active ? 'bold' : 'normal',
//         '&:hover': {
//           backgroundColor: theme.palette.action.hover,
//         }
//       }}
//     >
//       {children}
//     </MenuItem>
//   );
// };

// export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
//   const theme = useTheme();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const [anchorCourses, setAnchorCourses] = useState(null);
//   const [anchorPages, setAnchorPages] = useState(null);
//   const [anchorMobile, setAnchorMobile] = useState(null);
//   const [anchorProfile, setAnchorProfile] = useState(null); // Profile dropdown

//   const open = (set) => (e) => set(e.currentTarget);
//   const close = (set) => () => set(null);

//   const linkStyle = (path) => ({
//     color:
//       location.pathname === path
//         ? theme.palette.secondary.main
//         : theme.palette.primary.contrastText,
//     fontWeight: location.pathname === path ? 'bold' : 'normal',
//     textTransform: 'none',
//     '&:hover': {
//       bgcolor: theme.palette.primary.dark,
//       color: theme.palette.secondary.main,
//     },
//   });

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <AppBar position="sticky" sx={{ bgcolor: theme.palette.primary.main, boxShadow: 3 }}>
//       <Toolbar sx={{ gap: 2, justifyContent: 'space-between' }}>
//         {/* Logo */}
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 700,
//             color: 'white',
//             textDecoration: 'none',
//           }}
//           component={Link}
//           to="/"
//         >
//           Learn<span style={{ color: theme.palette.secondary.main }}>4</span>Dream
//         </Typography>

//         {/* Desktop Menu */}
//         {!isMobile && (
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             <Button component={Link} to="/" sx={linkStyle('/')}>Home</Button>

//             <Button endIcon={<ExpandMore />} onClick={open(setAnchorCourses)} sx={linkStyle('/courses')}>
//               Courses
//             </Button>
//             <Menu anchorEl={anchorCourses} open={Boolean(anchorCourses)} onClose={close(setAnchorCourses)}>
//               <NavLinkBtn to="/courses" closeMenu={close(setAnchorCourses)}>All Courses</NavLinkBtn>
//               <NavLinkBtn to="/courses/detail" closeMenu={close(setAnchorCourses)}>Course Detail</NavLinkBtn>
//             </Menu>

//             <Button endIcon={<ExpandMore />} onClick={open(setAnchorPages)} sx={linkStyle('/blogs')}>
//               Pages
//             </Button>
//             <Menu anchorEl={anchorPages} open={Boolean(anchorPages)} onClose={close(setAnchorPages)}>
//               <NavLinkBtn to="/blogs" closeMenu={close(setAnchorPages)}>Blogs</NavLinkBtn>
//               <NavLinkBtn to="/about" closeMenu={close(setAnchorPages)}>About</NavLinkBtn>
//             </Menu>

//             <Button component={Link} to="/contact" sx={linkStyle('/contact')}>
//               Contact
//             </Button>

//             {/* Auth */}
//             {!isLoggedIn ? (
//               <>
//                 <Button component={Link} to="/login" variant="outlined" color="secondary" sx={{ borderRadius: 3 }}>
//                   Login
//                 </Button>
//                 <Button component={Link} to="/signup" variant="contained" color="secondary" sx={{ borderRadius: 3 }}>
//                   Sign Up
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <IconButton onClick={open(setAnchorProfile)} sx={{ color: 'white' }}>
//                   <CgProfile size={24} />
//                 </IconButton>
//                 <Menu anchorEl={anchorProfile} open={Boolean(anchorProfile)} onClose={close(setAnchorProfile)}>
//                   <NavLinkBtn to="/profile" closeMenu={close(setAnchorProfile)}>Profile</NavLinkBtn>
//                   <NavLinkBtn to="/mycourses" closeMenu={close(setAnchorProfile)}>My Courses</NavLinkBtn>
//                   <MenuItem onClick={() => { handleLogout(); close(setAnchorProfile)(); }}>
//                     Logout
//                   </MenuItem>
//                 </Menu>
//               </>
//             )}
//           </Box>
//         )}

//         {/* Mobile Menu */}
//         {isMobile && (
//           <>
//             <IconButton color="inherit" onClick={open(setAnchorMobile)}>
//               <MenuIcon />
//             </IconButton>
//             <Menu anchorEl={anchorMobile} open={Boolean(anchorMobile)} onClose={close(setAnchorMobile)}>
//               <Typography variant="subtitle1" sx={{ px: 2, py: 1, fontWeight: 'bold' }}>Navigation</Typography>
//               <NavLinkBtn to="/" closeMenu={close(setAnchorMobile)}>Home</NavLinkBtn>
//               <NavLinkBtn to="/courses" closeMenu={close(setAnchorMobile)}>All Courses</NavLinkBtn>
//               <NavLinkBtn to="/courses/detail" closeMenu={close(setAnchorMobile)}>Course Detail</NavLinkBtn>
//               <NavLinkBtn to="/blogs" closeMenu={close(setAnchorMobile)}>Blogs</NavLinkBtn>
//               <NavLinkBtn to="/about" closeMenu={close(setAnchorMobile)}>About</NavLinkBtn>
//               <NavLinkBtn to="/contact" closeMenu={close(setAnchorMobile)}>Contact</NavLinkBtn>
//               <Divider />
//               {!isLoggedIn ? (
//                 <>
//                   <NavLinkBtn to="/login" closeMenu={close(setAnchorMobile)}>Login</NavLinkBtn>
//                   <NavLinkBtn to="/signup" closeMenu={close(setAnchorMobile)}>Sign Up</NavLinkBtn>
//                 </>
//               ) : (
//                 <>
//                   <NavLinkBtn to="/profile" closeMenu={close(setAnchorMobile)}>Profile</NavLinkBtn>
//                   <NavLinkBtn to="/mycourses" closeMenu={close(setAnchorMobile)}>My Courses</NavLinkBtn>
//                   <MenuItem onClick={() => { handleLogout(); close(setAnchorMobile)(); }}>
//                     Logout
//                   </MenuItem>
//                 </>
//               )}
//             </Menu>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

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
