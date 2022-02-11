
import { createTheme } from '@mui/material/styles';
import { Colors } from './export';
import { Colors as ColorsType } from '../interfaces/Theme';

export const newTheme = {
  palette: {
    background: {
      default: (Colors as ColorsType).colorWhite,
      paper: (Colors as ColorsType).colorWhite
    },
    primary: {
      contrastText:  (Colors as ColorsType).colorWhite,
      main:  (Colors as ColorsType).colorPrimary,
    },
    secondary: {
      main: (Colors as ColorsType).colorSecondary
    },
    text: {
      primary: (Colors as ColorsType).colorAltPrimary,
      secondary: (Colors as ColorsType).colorAltSecondary
    }
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: (Colors as ColorsType).colorSecondary
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-indicator': {
            backgroundColor: (Colors as ColorsType).colorSecondary
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: (Colors as ColorsType).colorSecondary
          },
          '&.MuiButtonBase-root': {
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 400
          }
        }
      }
    }
  }
}

export const muiTheme = createTheme(newTheme);