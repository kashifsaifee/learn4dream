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

// User data without bio
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  address: "123 Main Street, Springfield, USA",
  profilePicture: "https://i.pravatar.cc/150?img=3",
};

const enrolledCourses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Jane Smith",
    image: "https://source.unsplash.com/400x200/?react",
    progress: "45%",
  },
  {
    id: 2,
    title: "Mastering JavaScript",
    instructor: "Mark Johnson",
    image: "https://source.unsplash.com/400x200/?javascript",
    progress: "78%",
  },
];

const Profile = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* User Info Section */}
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar
            src={user.profilePicture}
            alt={user.name}
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {user.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.address}
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Divider sx={{ mb: 4 }} />

      {/* Enrolled Courses Section */}
      <Typography variant="h6" gutterBottom>
        Enrolled Courses
      </Typography>
      <Grid container spacing={3}>
        {enrolledCourses.map((course) => (
          <Grid item xs={12} md={6} lg={4} key={course.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
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

export default Profile;
