// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#496580', // Navy/Steel Blue
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#BADDFF', // Light Blue
//     },
//     warning: {
//       main: '#f56a2c', // Coral Orange (used for "4")
//       contrastText: '#ffffff',
//     },
//     background: {
//       default: '#FFDBBB', // Soft background
//       paper: '#ffffff',
//     },
//     text: {
//       primary: '#222222',
//       secondary: '#555555',
//     },
//   },
//   typography: {
//     fontFamily: 'Inter, Roboto, Arial, sans-serif',
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           fontWeight: 600,
//         },
//       },
//     },
//   },
// });

// export default theme;



import { createTheme } from "@mui/material/styles";

// Color Palette
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4e85b9",     // Coral Orange
      contrastText: "#fff"
    },
    secondary: {
      main: "#001F3F",     // Deep Navy
      contrastText: "#fff"
    },
    background: {
      default: "#F9FAFB",  // Light gray background for body
      paper: "#FFFFFF",    // White for cards, AppBar, menus
    },
    text: {
      primary: "#222222",  // Dark text
      secondary: "#555555" // Muted text
    },
    action: {
      hover: "#F2F2F2",     // Light hover background
      active: "#FF6B00",    // Use Coral Orange for selected icons/buttons
    },
    error: {
      main: "#D32F2F",      // Standard red
    },
    warning: {
      main: "#FFA000",
    },
    info: {
      main: "#0288D1",
    },
    success: {
      main: "#388E3C",
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: {
      textTransform: "none", // Keep button text normal case
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;

