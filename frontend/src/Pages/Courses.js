import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Menu,
  MenuItem,
  Chip,
  Avatar,
  IconButton,
  InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FilterListIcon from '@mui/icons-material/FilterList';
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

// Removed your static 'courses' array here

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedCourses, setFetchedCourses] = useState([]);  // New state for fetched courses
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const containerRef = useRef(null);

  const userEmail = localStorage.getItem("userEmail"); // Get user email for fetching courses

  // Fetch courses for the logged-in user
  useEffect(() => {
    if (!userEmail) return;

    fetch('http://localhost:5000/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userEmail }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Fetched courses:", data);
        if (Array.isArray(data)) {
          // yaha paar - each course has an id (fallback to index if not)
          const coursesWithId = data.map((course, index) => ({
            id: course.id || course._id || index,
            ...course
          }));
          setFetchedCourses(coursesWithId);
        } else {
          console.error("Fetched data is not an array:", data);
          setFetchedCourses([]);
        }
      })
      .catch(err => {
        console.error('Error fetching courses:', err);
        setFetchedCourses([]);
      });
  }, [userEmail]);

  // Filter courses by search term on fetchedCourses (not static anymore)
  useEffect(() => {
    const filtered = fetchedCourses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm, fetchedCourses]);

  // Save cart to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const enrollCourse = async (courseId) => {
    if (cart.find((item) => item.id === courseId)) return;

    setLoading(courseId);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const courseToAdd = fetchedCourses.find((course) => course.id === courseId);
      setCart((prevCart) => [...prevCart, courseToAdd]);
      alert("Added to cart");
    } catch (error) {
      alert("Error enrolling in course");
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      <Box sx={{ 
        py: 8, 
        px: { xs: 2, md: 6 }, 
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
        minHeight: "100vh"
      }}>
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            fontWeight={700}
            color="text.primary"
            gutterBottom
            sx={{ 
              mb: 2,
              background: "linear-gradient(90deg, #3f51b5, #2196f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Expand Your Knowledge
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            mb={4}
            sx={{ fontSize: "1.1rem" }}
          >
            Discover industry-leading courses taught by experts
          </Typography>

          {/* Search + Filter */}
          <Box sx={{ 
            display: "flex", 
            gap: 2, 
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ 
                maxWidth: 500,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 50,
                  backgroundColor: "white",
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              onClick={handleMenuOpen}
              sx={{ 
                borderRadius: 50,
                px: 3,
                py: 1,
                borderColor: "#ddd",
                color: "text.primary"
              }}
            >
              Filters
            </Button>
            
            <IconButton 
              component={Link} 
              to="/mycourses"
              sx={{ 
                backgroundColor: "white",
                boxShadow: 1,
                "&:hover": {
                  backgroundColor: "#f5f5f5"
                }
              }}
            >
              <ShoppingBagOutlinedIcon />
            </IconButton>
          </Box>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/courses/data">Data Science</MenuItem>
            <MenuItem component={Link} to="/courses/ml">Machine Learning</MenuItem>
            <MenuItem component={Link} to="/courses/ai">Artificial Intelligence</MenuItem>
          </Menu>
        </Box>

        {/* Horizontal Scrolling Course Cards */}
        <Box 
          ref={containerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            py: 2,
            px: 1,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <Box 
                key={course.id}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: 280, sm: 320 },
                  minWidth: 280
                }}
              >
                <motion.div 
                  whileHover={{ y: -5 }} 
                  transition={{ duration: 0.2 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 12px 24px rgba(0,0,0,0.12)"
                      },
                      border: "1px solid rgba(0,0,0,0.05)"
                    }}
                  >
                    <Box
                      component="img"
                      src={course.image}
                      alt={course.title}
                      sx={{
                        width: "100%",
                        height: 160,
                        objectFit: "cover",
                      }}
                    />

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                        <Chip 
                          label={course.level} 
                          size="small" 
                          color={
                            course.level === "Beginner" ? "primary" : 
                            course.level === "Intermediate" ? "secondary" : "error"
                          }
                        />
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <StarIcon sx={{ color: "#ffc107", fontSize: 18, mr: 0.5 }} />
                          <Typography variant="body2" color="text.secondary">
                            {course.rating}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {course.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {course.description}
                      </Typography>
                      
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Avatar sx={{ 
                          width: 24, 
                          height: 24, 
                          mr: 1,
                          backgroundColor: "primary.main",
                          fontSize: "0.75rem"
                        }}>
                          {course.duration.split(" ")[0]}
                        </Avatar>
                        <Typography variant="caption" color="text.secondary">
                          {course.duration} • {course.level}
                        </Typography>
                      </Box>
                    </CardContent>

                    <Box sx={{ 
                      p: 3, 
                      pt: 0,
                      display: "flex", 
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        color="primary"
                      >
                        ₹{course.price}
                      </Typography>

                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => enrollCourse(course.id)}
                        disabled={loading === course.id || cart.find(item => item.id === course.id)}
                        sx={{
                          borderRadius: 20,
                          textTransform: "none",
                          fontWeight: 600,
                        }}
                      >
                        {loading === course.id ? "Adding..." : cart.find(item => item.id === course.id) ? "Added" : "Enroll"}
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            ))
          ) : (
            <Typography variant="body1" sx={{ m: 2 }}>
              No courses found.
            </Typography>
          )}
        </Box>
      </Box>

      <Footer />
    </>
  );
}
