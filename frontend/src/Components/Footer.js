import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand & Socials */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Learn4Dream
            </Typography>
            <Typography variant="body2">
              Empowering students through accessible education since 2023.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[
                { icon: Facebook, label: 'Facebook', link: '#' },
                { icon: Twitter, label: 'Twitter', link: '#' },
                { icon: Instagram, label: 'Instagram', link: '#' },
                { icon: LinkedIn, label: 'LinkedIn', link: '#' },
                { icon: YouTube, label: 'YouTube', link: '#' }
              ].map(({ icon: Icon, label, link }, index) => (
                <IconButton
                  key={index}
                  aria-label={label}
                  color="inherit"
                  href={link}
                  sx={{
                    mr: 1,
                    '&:hover': {
                      color: 'secondary.main'
                    }
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0, m: 0 }}>
              {[
                { text: 'Courses', to: '/courses' },
                { text: 'About Us', to: '/about' },
                { text: 'Blog', to: '/blog' },
                { text: 'Contact', to: '/contact' },
                { text: 'Privacy Policy', to: '/privacy' }
              ].map(({ text, to }) => (
                <li key={text}>
                  <Link
                    to={to}
                    style={{
                      display: 'block',
                      padding: '4px 0',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0, m: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Email sx={{ mr: 1 }} />
                <Typography variant="body2">contact@learn4dream.com</Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <Phone sx={{ mr: 1 }} />
                <Typography variant="body2">+1 (123) 456-7890</Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1 }} />
                <Typography variant="body2">123 Education St, Knowledge City</Typography>
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Newsletter
            </Typography>
            <Typography variant="body2">
              Subscribe for updates and resources.
            </Typography>
            <Box component="form" sx={{ display: 'flex', mt: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Your Email"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: '4px 0 0 4px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'transparent' }
                  }
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{ borderRadius: '0 4px 4px 0' }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Learn4Dream. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
