import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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