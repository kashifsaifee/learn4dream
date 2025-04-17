import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material'; // Import Material-UI components
import '../Styles/Contact.css'; // Optional, if you want to keep custom styles

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://127.0.0.1:5000/contact', {
        email,
        message,
      });

      if (res.data.status === "success") {
        setStatus('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <TextField
          label="Your Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">Send Message</Button>
        {status && <Typography variant="body1">{status}</Typography>}
      </form>
    </div>
  );
};

export default Contact;
