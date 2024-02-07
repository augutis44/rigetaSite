import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1669
    },
  },
  typography: {
    fontFamily: [
      'Noto Sans !important', 'sans-serif'
    ],
  },
  palette: {
    primary: {
      main: '#274367'
    },
    secondary: {
      main: '#F1FAEE'
    },
    warning: {
      main: '#E63946'
    }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: '0rem',
        },
      },
    },
  },
});

export default theme;