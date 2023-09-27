import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface Theme {
    warnings: {
      main: string;
      dark: string;
      yellow: string;
    };
    grey: {
      grey50?: string;
      Grey700?: string;
      Grey900?: string;
      Grey800?: string;
      Grey600: string;
      Grey400?: string;
      Grey450?: string;
      Grey350?: string;
      Grey300?: string;
      Grey50?: string;
      Grey25?: string;
    };
  }
  interface ThemeOptions {
    warnings?: {
      main?: string;

      dark?: string;
      yellow?: string;
    };
    grey?: {
      grey50?: string;
      Grey700?: string;
      Grey800?: string;
      Grey900?: string;
      Grey600: string;
      Grey450?: string;
      Grey400?: string;
      Grey350?: string;
      Grey300?: string;
      Grey50?: string;
      Grey25?: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      light: '#83A7EC',
      dark: '#214996',
      main: '#444CE7',
      contrastText: '#FFFFFF',
      '800': '#444CE7',
      '500': '#9AB6EC',
      '200': '#C9D7F2',
      '100': '#EBF2FF',
      '50': '#F7FAFF',
    },
    secondary: {
      light: '#9BED63',
      main: '#6EB43F',
      dark: '#9BED63',
      contrastText: '#000',
      '500': '#8FBC71',
      '200': '#C9EFB0',
      '100': '#C4DEB3',
      '50': '#E3F2D9',
    },
    warning: {
      main: '#C52620',
      dark: '#87211D',
      light: '#FBD7D5',
      '700': '#EDC022',
    },
  },
  grey: {
    Grey900: '#272727',
    Grey800: '#333333',
    Grey700: '#484848',
    Grey600: '#6F6F6F',
    Grey450: '#C4C4C4',
    Grey400: '#CECECE',
    Grey350: '#D8D8D8',
    Grey300: '#DDDDDD',
    Grey50: '#F4F4F4',
    Grey25: '#FAFAFA',
  },
  typography: {
    fontFamily: ['Inter', 'Open Sans', 'sans-serif'].join(','),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,

    // Title-Huge --> figma --> font-size:28px;
    h1: {
      fontSize: '1.75rem',
      lineHeight: '120%',
      fontWeight: 600,
      color: '#181818',
    },
    //  Title-Large 24px in figma
    h2: {
      fontSize: '1.5rem',
      lineHeight: '130%',
      fontWeight: 600,
    },

    // Title-Medium-Bold 22px in figma
    h3: {
      fontSize: '1.375rem',
      lineHeight: '130%',
      fontWeight: 600,
      color: '#484848',
    },

    // Title-Medium-SemiBold --> 22px in figma
    h4: {
      fontSize: '1.375rem',
      lineHeight: '130%',
      fontWeight: 600,
      color: '#272727',
    },

    // Title-Small --> 20px in figma
    h5: {
      fontSize: '1.25rem',
      lineHeight: '130%',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.125',
      lineHeight: '130%',
      fontWeight: 600,
    },

    // Body Huge --> 18px in figma
    body1: {
      fontSize: '1rem',
      color: '#272727',
      fontWeight: 600,
    },

    // Body Large --> 16px in figma
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 600,
      color: '#272727',
    },

    // Body Medium --> 14px in figma
    subtitle1: {
      fontSize: '0.875rem',
      lineHeight: '140%',
      fontWeight: 600,
      color: '#484848',
    },

    // Body small --> 12px in figma
    subtitle2: {
      fontSize: '0.75rem',
      lineHeight: '140%',
      fontWeight: 600,
    },
  },
});

theme = createTheme(theme, {
  shadows: [...Array(25).fill('none')],
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgb(208,213,221)',
        },
        root: {
          height: '48px',
          borderRadius: '.5rem',
          fontWeight: 500,
          color: theme.grey.Grey900,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 0,
          overflowY: 'hidden',
          backgroundColor: '#fff',
          borderRadius: '.5rem',
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px',
          '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: '.85rem',
            fontWeight: 700,
            textTransform: 'initial',
            color: theme.grey.Grey900,
            paddingLeft: '.25rem',
            paddingRight: '.25rem',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.grey.Grey25,
          },
          '& .super-app-theme--header': {
            backgroundColor: theme.grey.Grey25,
            color: theme.grey.Grey900,
          },
          '& .MuiDataGrid-cell': {
            fontSize: '.9rem',
            fontWeight: 500,
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            color: theme.grey.Grey700,
          },
          '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator':
            {
              display: 'none',
            },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: theme.grey.Grey25,
          borderRadius: '.5rem',
          boxShadow:
            'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid',
          borderBottomColor: '#EAECF0',
        },
        indicator: {
          height: 2,
          transition: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.grey.Grey700,
          fontWeight: 500,
          textTransform: 'none',
          fontSize: '1.05rem',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          borderBottom: '2px solid transparent',
          transition: '.2s ease border',
          '&:hover': {
            color: theme.grey.Grey900,
            borderColor: theme.grey.Grey450,
          },
          '&.Mui-selected': {
            color: theme.palette.primary.main,
            borderColor: 'transparent',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: '.5rem',
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px',
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        outlined: {
          padding: '0 .75rem',
          fontSize: '1rem',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        transition: false,
      },

      styleOverrides: {
        containedPrimary: {
          color: theme.palette.primary.contrastText,
          background: `${theme.palette.primary.main}`,
          backgroundColor: `${theme.palette.primary.main}`,
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          paddingTop: '0.65rem',
          paddingBottom: '0.65rem',
          borderRadius: '.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          fontSize: '.875rem',
          textTransform: 'capitalize',
          boxShadow: 0,
        },

        outlinedPrimary: {
          color: theme.grey.Grey900,
          borderColor: 'rgb(208,213,221)',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          paddingTop: '0.65rem',
          paddingBottom: '0.65rem',
          borderRadius: '.5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          fontSize: '.875rem',
          textTransform: 'capitalize',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
