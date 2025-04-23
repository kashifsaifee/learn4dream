import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
// import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Navbar
      <Navbar /> */}

      {/* Hero Section */}
      <MotionBox
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 12, md: 16 },
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Learn. Grow. Transform.
          </Typography>
          <Typography variant="h6" paragraph>
            Join Learn4Dream and unlock your future with high-quality, practical courses designed by experts.
          </Typography>
          <Button
           href = 'Courses'
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

      {/* Highlights Section */}
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="h4" gutterBottom fontWeight="medium">
          Why Learn4Dream?
        </Typography>
        <Container>
          <Grid container spacing={5}>
            {[
              {
                title: 'Industry-Relevant Curriculum',
                desc: 'Stay ahead with content designed by top educators & tech leaders.',
              },
              {
                title: 'Flexible Learning',
                desc: 'Access courses anytime, anywhere, at your own pace.',
              },
              {
                title: 'Live Doubt Sessions',
                desc: 'Interact with mentors in real time and get your doubts cleared.',
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

      {/* Newsletter Section */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'secondary.contrastText',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h5" gutterBottom fontWeight="medium">
            Stay Updated With Our Latest Courses
          </Typography>
          <Typography variant="body1" paragraph>
            Subscribe to our newsletter and never miss out on new content and offers.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 3,
              maxWidth: 500,
              mx: 'auto',
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: '#fff',
            }}
          >
            <TextField
              type="email"
              placeholder="Your email address"
              variant="outlined"
              fullWidth
              sx={{ borderRadius: 0, border: 'none' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: 0, px: 4 }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
