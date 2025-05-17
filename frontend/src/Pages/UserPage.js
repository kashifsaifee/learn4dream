import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
} from "@mui/material";

// Sample user data
const user = {
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  profilePicture: "https://i.pravatar.cc/150?img=5",
  bio: "Frontend developer passionate about creating interactive web experiences.",
};

// Sample enrolled courses
const enrolledCourses = [
  {
    id: 1,
    title: "Advanced React & Redux",
    instructor: "Emily Clark",
    image: "https://source.unsplash.com/400x200/?react,code",
    progress: "60%",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Michael Lee",
    image: "https://source.unsplash.com/400x200/?design,ui",
    progress: "95%",
  },
  {
    id: 3,
    title: "TypeScript Essentials",
    instructor: "Laura Kim",
    image: "https://source.unsplash.com/400x200/?typescript",
    progress: "30%",
  },
];

const UserPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* User Info Card */}
      <Paper elevation={3} sx={{ p: 3, mb: 5, borderRadius: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar
            src={user.profilePicture}
            alt={user.name}
            sx={{ width: 90, height: 90 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user.email}
            </Typography>
            <Typography variant="body2" mt={1}>
              {user.bio}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Enrolled Courses */}
      <Typography variant="h6" gutterBottom>
        Enrolled Courses
      </Typography>
      <Grid container spacing={3}>
        {enrolledCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Instructor: {course.instructor}
                </Typography>
                <Typography variant="body2" color="primary" mt={1}>
                  Progress: {course.progress}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserPage;
