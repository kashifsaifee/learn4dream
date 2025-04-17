import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, TextField } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 10, md: 14 },
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>Learn. Grow. Transform.</Typography>
          <Typography variant="h6" paragraph>
            Join Learn4Dream and unlock your future with high-quality, practical courses designed by experts.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 2,
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
        <Typography variant="h4" gutterBottom>Why Learn4Dream?</Typography>
        <Container>
          <Grid container spacing={4}>
            {[
              { title: 'Industry-Relevant Curriculum', desc: 'Stay ahead with content designed by top educators & tech leaders.' },
              { title: 'Flexible Learning', desc: 'Access courses anytime, anywhere, at your own pace.' },
              { title: 'Live Doubt Sessions', desc: 'Interact with mentors in real time and get your doubts cleared.' }
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <MotionPaper
                  elevation={3}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  sx={{ p: 4, bgcolor: 'primary.main', color: 'text.primary' }}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1">{item.desc}</Typography>
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
          <Typography variant="h5" gutterBottom>Stay Updated With Our Latest Courses</Typography>
          <Typography variant="body1" paragraph>
            Subscribe to our newsletter and never miss out on new content and offers.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
              maxWidth: 500,
              mx: 'auto'
            }}
          >
            <TextField
              type="email"
              placeholder="Your email address"
              variant="outlined"
              sx={{
                bgcolor: '#fff',
                borderRadius: '4px 0 0 4px',
                flex: 1
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: '0 4px 4px 0' }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
