import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 
  palette: {
    mode: 'light',
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#101828',
      secondary: '#5C6570',
    },
    primary: {
      main: '#0072BC',
      light: '#3D93D1',
      dark: '#00558C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D6006D',
      light: '#E43F92',
      dark: '#A50054',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#00AEEF',
      contrastText: '#FFFFFF',
    },
    divider: '#E7E9EC',
    grey: {
      50: '#FAFAFB',
      100: '#F3F4F6',
      200: '#E7E9EC',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
    overline: {
      fontFamily: '"IBM Plex Mono", monospace',
      letterSpacing: '0.08em',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;