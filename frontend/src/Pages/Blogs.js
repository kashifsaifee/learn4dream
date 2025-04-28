import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
// import Footer from '../Components/Footer';
=======
>>>>>>> 9f548c7ce07d85dcc11af9436a9ef8fcb8259100

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const blogs = [
  {
    id: 1,
    title: 'Top 10 Skills to Learn in 2025',
    excerpt:
      'Discover the most in-demand skills for the future and how Learn4Dream can help you master them.',
    link: '/blogs/top-skills-2025',
    image:
      'https://dummyimage.com/400x250/007bff/fff&text=Skills+2025',
  },
  {
    id: 2,
    title: 'How to Build a Career in Data Science',
    excerpt:
      'Data Science is booming. Learn how to start your journey and land a job in this exciting field.',
    link: '/blogs/data-science-career',
    image:
      'https://dummyimage.com/400x250/28a745/fff&text=Data+Science',
  },
  {
    id: 3,
    title: 'Web Development Roadmap for Beginners',
    excerpt:
      'Step-by-step roadmap to becoming a professional web developer in 2025.',
    link: '/blogs/web-development-roadmap',
    image:
      'https://dummyimage.com/400x250/ffc107/000&text=Web+Dev',
  },
];

const Blogs = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <MotionBox
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 12,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Explore Our Blogs
          </Typography>
          <Typography variant="h5" paragraph>
            Stay updated with our expert insights, guides, and tips to help you
            learn and grow in the digital world.
          </Typography>
          <Button variant="outlined" color="secondary" size="large">
            Start Learning
          </Button>
        </Container>
      </MotionBox>

      <Box sx={{ py: 12, bgcolor: 'background.default' }}>
        <Container>
          <Grid container spacing={4}>
            {blogs.map((blog, index) => (
              <Grid item xs={12} md={4} key={blog.id}>
                <MotionPaper
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  elevation={6}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      image={blog.image}
                      alt={blog.title}
                      sx={{
                        height: 200,
                        objectFit: 'cover',
                        width: '100%',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                      >
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {blog.excerpt}
                      </Typography>
                    </CardContent>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Button
                        component={Link}
                        to={blog.link}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Read More
                      </Button>
                    </Box>
                  </Card>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Blogs;
