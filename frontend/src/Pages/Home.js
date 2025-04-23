import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>

      <MotionBox
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          pt: { xs: 10, md: 12 },
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Learn. Grow. Transform.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Join Learn4Dream and unlock your future with high-quality, practical courses designed by experts.
          </Typography>
 
          <Button
            component={Link}
            to="/courses"
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              mt: 3,
              px: 4,
              '&:hover': {
                bgcolor: '#FF4C4C',
              },
            }}
          >
            Explore Courses
          </Button>
        </Container>
      </MotionBox>

      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="h4" gutterBottom fontWeight="medium">
          About Learn4Dream
        </Typography>
        <Container>
          <Typography variant="body1" paragraph>
            Learn4Dream is an online education platform that provides a wide variety of high-quality courses
            for students, professionals, and lifelong learners. We offer industry-relevant courses designed by
            expert instructors, ensuring you stay ahead in your career or studies.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're looking to acquire new skills, advance in your career, or gain a deeper understanding
            of various subjects, Learn4Dream has something for you. Our courses are flexible, accessible,
            and designed to fit into your busy lifestyle.
          </Typography>
        </Container>
      </Box>

  
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'primary.light' }}>
        <Typography variant="h4" gutterBottom fontWeight="medium">
          How It Works
        </Typography>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <MotionPaper
                elevation={4}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Choose a Course
                </Typography>
                <Typography variant="body1" mt={1}>
                  Browse through our wide selection of courses and choose one that suits your needs and goals.
                </Typography>
              </MotionPaper>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionPaper
                elevation={4}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Start Learning
                </Typography>
                <Typography variant="body1" mt={1}>
                  Dive into the course material at your own pace, with 24/7 access to lectures, assignments,
                  and discussions.
                </Typography>
              </MotionPaper>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionPaper
                elevation={4}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Get Certified
                </Typography>
                <Typography variant="body1" mt={1}>
                  Complete the course and earn a certificate that can boost your career prospects.
                </Typography>
              </MotionPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'background.default' }}>
        <Typography variant="h4" gutterBottom fontWeight="medium">
          Featured Courses
        </Typography>
        <Container>
          <Grid container spacing={4}>
            {[ 
              {
                title: 'Web Development',
                desc: 'Learn how to build modern websites and web applications from scratch using HTML, CSS, JavaScript, and React.',
              },
              {
                title: 'Data Science',
                desc: 'Master data analysis, machine learning, and data visualization with Python and popular libraries like Pandas and Scikit-learn.',
              },
              {
                title: 'Digital Marketing',
                desc: 'Understand the fundamentals of digital marketing, including SEO, PPC, and social media strategies.',
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <MotionPaper
                  elevation={4}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    bgcolor: 'primary.light',
                    color: 'text.primary',
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {item.desc}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'secondary.main' }}>
        <Typography variant="h4" gutterBottom fontWeight="medium">
          What Our Students Say
        </Typography>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <MotionPaper
                elevation={4}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Jane Doe
                </Typography>
                <Typography variant="body1" mt={1}>
                  "The Data Science course was amazing! The instructors were very knowledgeable, and the course
                  material was really engaging."
                </Typography>
              </MotionPaper>
            </Grid>
            <Grid item xs={12} md={4}>
              <MotionPaper
                elevation={4}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  John Smith
                </Typography>
                <Typography variant="body1" mt={1}>
                  "Learn4Dream's Digital Marketing course helped me land my dream job! The resources were
                  fantastic."
                </Typography>
              </MotionPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
