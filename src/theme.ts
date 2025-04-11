import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111827', // Tailwind's gray-900
      paper: '#1f2937',   // Tailwind's gray-800
    },
    text: {
      primary: '#f3f4f6', // Tailwind's gray-100
      secondary: '#e5e7eb', // Tailwind's gray-200
    },
    primary: {
      main: '#3b82f6', // Tailwind's blue-500
    },
    secondary: {
      main: '#10b981', // Tailwind's emerald-500
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
        },
      },
    },
  },
});

export default darkTheme;