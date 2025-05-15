import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeCourse = (id) => {
    setCart((prevCart) => prevCart.filter((course) => course.id !== id));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // Checkout logic here (e.g., payment gateway)
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          p: { xs: 3, md: 6 },
          background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          sx={{
            mb: 4,
            background: "linear-gradient(90deg, #3f51b5, #2196f3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your Enrolled Courses
        </Typography>

        {cart.length === 0 ? (
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            mt={6}
          >
            Your cart is empty.
            <Button
              component={Link}
              to="/courses"
              variant="outlined"
              sx={{ ml: 1 }}
            >
              Browse Courses
            </Button>
          </Typography>
        ) : (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                  md: "1fr 1fr 1fr",
                },
                gap: 4,
              }}
            >
              {cart.map((course) => (
                <Card key={course.id} sx={{ display: "flex", flexDirection: "column" }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={course.image}
                    alt={course.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        mb: 2,
                      }}
                    >
                      {course.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duration: {course.duration}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Level: {course.level}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      fontWeight={700}
                      mt={1}
                    >
                      {course.price}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      p: 2,
                      pt: 0,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <IconButton
                      color="error"
                      onClick={() => removeCourse(course.id)}
                      aria-label="Remove course"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Card>
              ))}
            </Box>

            <Box sx={{ mt: 6, display: "flex", justifyContent: "center", gap: 3 }}>
              <Button
                component={Link}
                to="/courses"
                variant="outlined"
                size="large"
                sx={{ borderRadius: 50, px: 5 }}
              >
                Add More Courses
              </Button>
              <Button
                variant="contained"
                size="large"
                color="success"
                onClick={handleCheckout}
                sx={{ borderRadius: 50, px: 5 }}
              >
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>

      <Footer />
    </>
  );
}
