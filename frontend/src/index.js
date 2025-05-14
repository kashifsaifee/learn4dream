import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366',         // Deep Navy
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ff9800',         // Coral Orange
      contrastText: '#ffffff'
    },
    background: {
      default: '#001F33',      // Optional: dark background
      paper: '#002B4C'         // Optional: card background
    },
    text: {
      primary: '#ffffff',      // Light text
      secondary: '#cccccc'     // Softer text
    }
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>

  </React.StrictMode>
);
