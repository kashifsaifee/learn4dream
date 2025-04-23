import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#0a1e3f',
          color: 'white',
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 10 },
          minHeight: '100vh',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FFA559', mb: 4 }}>
            About Learn4Dream
          </Typography>

          <Typography variant="h6" sx={{ maxWidth: '850px', mb: 6, lineHeight: 1.8 }}>
            At Learn4Dream, we believe that education is the most powerful tool for shaping the future.
            Our platform was built to bridge gaps in learning, foster collaboration, and ensure that no learner
            is left behind — regardless of background, age, or goals.
            <br />
            <br />
            We provide personalized learning pathways, engaging multimedia content, and community support
            that empower students to thrive. For parents and educators, Learn4Dream is a trusted partner
            offering insights, tools, and resources to unlock every learner’s potential.
            <br />
            <br />
            Education is not one-size-fits-all. That's why we are committed to innovation, accessibility,
            and equity in everything we create.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'For Students',
                description:
                  'Explore engaging lessons, gamified quizzes, and practical activities designed to make learning fun and meaningful.',
              },
              {
                title: 'For Parents',
                description:
                  'Monitor your child’s progress, set goals together, and access helpful resources to stay involved in their education.',
              },
              {
                title: 'For Educators',
                description:
                  'Find cutting-edge tools and lesson plans, connect with a network of professionals, and shape the classroom of tomorrow.',
              },
            ].map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    backgroundColor: '#10284b',
                    height: '100%',
                    borderRadius: 3,
                    borderBottom: '6px solid #FFA559',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#FFA559', fontWeight: 'bold', mb: 2 }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {section.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </>
  );
};

export default About;

