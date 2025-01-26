import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3a437b',
    },
    secondary: {
      main: '#ff5b2d',
    },
    background: {
      paper: '#e6e6e6',
    },
  },
};



export default createTheme(themeOptions);