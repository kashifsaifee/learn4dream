// Home.js
import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import styled from '@emotion/styled';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Styled Components
const StyledSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden',
  background: 'white',
  display: 'flex',
  alignItems: 'center'
}));

const GradientText = styled(Typography)`
  background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const StatCard = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
`;

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP Hero animation
    gsap.from('.hero-element', {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out'
    });

    // GSAP Scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    });
  }, []);

  return (
    <Box ref={containerRef}>
      {/* Hero Section */}
      <StyledSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GradientText
                  variant="h1"
                  className="hero-element"
                  sx={{ fontWeight: 800, mb: 3 }}
                >
                  Learn. Grow. Succeed.
                </GradientText>
                <Typography
                  variant="h5"
                  className="hero-element"
                  sx={{ mb: 4, color: 'text.secondary' }}
                >
                  Transform your future with our cutting-edge learning platform
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  className="hero-element"
                  sx={{
                    background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
                    borderRadius: '30px',
                    px: 4,
                    py: 2
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div style={{ scale }}>
                <Box
                  sx={{
                    height: 500,
                    background: 'linear-gradient(45deg, #4776E6 0%, #8E54E9 100%)',
                    borderRadius: '20px',
                    opacity: 0.9
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>

      {/* Features Section */}
      <Box sx={{ py: 15, background: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            className="animate-on-scroll"
            sx={{ textAlign: 'center', mb: 8, fontWeight: 700 }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Interactive Learning',
                description:
                  'Engage with dynamic content and real-time feedback systems'
              },
              {
                title: 'Expert Instructors',
                description:
                  'Learn from industry professionals and certified experts'
              },
              {
                title: 'Flexible Schedule',
                description:
                  'Study at your own pace with 24/7 access to courses'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeatureCard
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="animate-on-scroll"
                >
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: 15,
          background: 'linear-gradient(45deg, #4776E6 0%, #8E54E9 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: '10K+', label: 'Active Students' },
              { number: '500+', label: 'Courses' },
              { number: '95%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <StatCard className="animate-on-scroll">
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="h6">{stat.label}</Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 15, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            className="animate-on-scroll"
            sx={{ mb: 4, fontWeight: 700 }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography
            variant="h6"
            className="animate-on-scroll"
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            Join thousands of learners who have transformed their careers with us
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="animate-on-scroll"
            sx={{
              background: 'linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)',
              borderRadius: '30px',
              px: 6,
              py: 2
            }}
          >
            Enroll Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
