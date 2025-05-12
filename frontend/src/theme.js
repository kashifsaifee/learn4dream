import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#496580', // Navy/Steel Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#BADDFF', // Light Blue
    },
    warning: {
      main: '#f56a2c', // Coral Orange (used for "4")
      contrastText: '#ffffff',
    },
    background: {
      default: '#FFDBBB', // Soft background
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        
        },
      },
    },
  },
});

export default theme;
