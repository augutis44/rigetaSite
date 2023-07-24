import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans !important', 'sans-serif'
    ],
  },
  palette: {
    primary: {
      light: '#1b2e48',
      main: '#274367',
      dark: '#526885',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8c3939',
      main: '#C85252',
      dark: '#d37474',
      contrastText: '#000',
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