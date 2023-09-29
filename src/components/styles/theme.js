import { createTheme } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
        primary: {
          main: '#ffd300', 
        },
        secondary: {
            main: '#fafafa', 
        },
        tertiary: {
            main: '#1f1f1f',
        },
        background: {
          default: '#202128',
          light: '#F5F5F5'
        },
    },
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: '#fafafa',
          },
        },
      },
    },
    
  }
);

export default theme;