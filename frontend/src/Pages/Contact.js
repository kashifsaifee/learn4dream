import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',       // ➕ Added phone field
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://127.0.0.1:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.status); // Show success message
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      alert('Failed to send message!');
      console.error(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, px: 5, py: 10, backgroundColor: '#f7fafd' }}>
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        {/* Left Side */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Let’s chat.
            <br />
            Tell us about your project.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
            Let’s create something together
          </Typography>

          <Paper elevation={3} sx={{ display: 'flex', alignItems: 'center', p: 2, maxWidth: 300 }}>
            <IconButton sx={{ mr: 1 }}>
              <EmailIcon color="primary" />
            </IconButton>
            <Box>
              <Typography variant="body2">Mail us at</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                contact@lorem.com
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Side - Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: '#2d6cdf',
              color: 'white',
              p: 4,
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Send us a message
            </Typography>

            <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="filled"
                fullWidth
                required
                sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }}
              />
              <TextField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="filled"
                fullWidth
                required
                sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }}
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="filled"
                fullWidth
                required
                sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }}
              />
              <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="filled"
                fullWidth
                required
                sx={{ mb: 2, backgroundColor: 'white', borderRadius: 1 }}
              />
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Tell us more about your project
              </Typography>
              <TextField
                name="message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message*"
                variant="filled"
                fullWidth
                required
                sx={{ mb: 3, backgroundColor: 'white', borderRadius: 1 }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: 'white',
                  color: '#000',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#f0f0f0' },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
