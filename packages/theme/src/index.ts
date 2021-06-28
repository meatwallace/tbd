import { Theme } from '@theme-ui/css';

export const colors = {
  // brand
  primary: '#2d248a',
  secondary: '#614ad3',
  accent: '#e42c64',

  // greyscale
  white: '#f9fafc',
  lightest: '#f1f3f8',
  light: '#d6e0f0',
  neutral: '#8d93ab',
  dark: '#393b44',
  darkest: '#161616',
  black: '#0a0a0a',

  // mixed colors
  blue: '#338eda',
  cyan: '#5bc0de',
  green: '#33d6a6',
  orange: '#ff8c37',
  purple: '#a633d6',
  red: '#ec3750',
  yellow: '#f1c40f',
};

export const theme: Theme = {
  // config
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,

  // styles
  breakpoints: [32, 48, 64, 96, 128].map((w) => `${w}em`),

  colors: {
    ...colors,

    // ui component mapping
    background: colors.white,
    border: colors.light,
    elevated: colors.lightest,
    header: colors.accent,
    highlight: colors.light,
    muted: colors.lightest,
    placeholder: colors.neutral,
    text: colors.black,

    // dark mode
    modes: {
      dark: {
        background: colors.black,
        border: colors.darkest,
        elevated: colors.darkest,
        header: colors.darkest,
        highlight: colors.darkest,
        muted: colors.dark,
        placeholder: colors.dark,
        text: colors.white,
      },
    },
  },
  fonts: {
    body: 'Karla, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading:
      'Rubik, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"SF Mono", "Roboto Mono", Menlo, Consolas, monospace',
  },
  fontSizes: [10, 13, 16, 20, 25, 32, 40, 50, 62, 78, 97, 121, 151],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  letterSpacings: {},
  lineHeights: {
    heading: 1.125,
    body: 1.5,
  },
  sizes: {
    layoutPlus: 1024,
    layout: 768,
  },
  radii: {
    default: 4,
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      marginBottom: 0,
      marginTop: 0,
    },
    title: {
      fontFamily: 'heading',
      fontSize: 4,
      fontWeight: 'bold',
      lineHeight: 'heading',
      marginBottom: 0,
      marginTop: 0,
    },
    headline: {
      variant: 'text.heading',
      fontSize: 3,
      marginBottom: 3,
      marginTop: 3,
    },
  },
  alerts: {},
  badges: {
    pill: {
      borderRadius: 'default',
      px: 3,
      py: 1,
      fontSize: 1,
    },
    black: {
      variant: 'badges.pill',
      backgroundColor: 'black',
    },
    dark: {
      variant: 'badges.pill',
      backgroundColor: 'dark',
    },
    neutral: {
      variant: 'badges.pill',
      backgroundColor: 'neutral',
    },
    light: {
      variant: 'badges.pill',
      backgroundColor: 'light',
      color: 'darkest',
    },
    outline: {
      variant: 'badges.pill',
      background: 'transparent',
      border: '1px solid',
      borderColor: 'currentColor',
    },
    cyan: {
      variant: 'badges.pill',
      backgroundColor: 'cyan',
    },
    green: {
      variant: 'badges.pill',
      backgroundColor: 'green',
    },
    purple: {
      variant: 'badges.pill',
      backgroundColor: 'purple',
    },
    orange: {
      variant: 'badges.pill',
      backgroundColor: 'orange',
    },
    red: {
      variant: 'badges.pill',
      backgroundColor: 'red',
    },
    yellow: {
      variant: 'badges.pill',
      backgroundColor: 'yellow',
    },
  },
  buttons: {
    primary: {
      alignItems: 'center',
      backgroundColor: 'primary',
      borderRadius: 'default',
      cursor: 'pointer',
      display: 'inline-flex',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      justifyContent: 'center',
      paddingBottom: 2,
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 2,
      WebkitTapHighlightColor: 'transparent',
    },
    secondary: {
      variant: 'buttons.primary',
      backgroundColor: 'secondary',
    },
    callToAction: {
      variant: 'buttons.primary',
      backgroundColor: 'accent',
    },
    icon: {
      variant: 'buttons.primary',
      backgroundColor: 'transparent',
      color: 'inherit',
      paddingBottom: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingTop: 1,
    },
  },
  cards: {
    primary: {
      borderRadius: 'default',
      boxShadow: 'card',
      color: 'text',
      padding: [3, 4],
      overflow: 'hidden',
    },
    sunken: {
      backgroundColor: 'lightest',
      borderRadius: 'default',
      color: 'text',
      padding: [3, 4],
      overflow: 'hidden',
    },
  },
  forms: {
    input: {
      backgroundColor: 'elevated',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'default',
      color: 'text',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'body',
      lineHeight: 'body',
      '::placeholder': { color: 'placeholder' },
    },
    textarea: {
      variant: 'forms.input',
    },
    select: {
      variant: 'forms.input',
    },
    label: {
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      fontSize: 2,
      textAlign: 'left',
    },
    labelHoriz: {
      color: 'text',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'left',
      fontSize: 2,
    },
    slider: {
      color: 'primary',
    },
    hidden: {
      position: 'absolute',
      height: '1px',
      width: '1px',
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)',
      whiteSpace: 'nowrap',
    },
  },
  layout: {
    container: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: [null, 'layout', null, 'layoutPlus'],
      paddingLeft: 4,
      paddingRight: 4,
      width: '100%',
    },
  },
  styles: {
    root: {
      color: 'text',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'body',
      lineHeight: 'body',
      margin: 0,
      minHeight: '100vh',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
      color: 'green',
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      marginBottom: 3,
      marginTop: 3,
    },
    a: {
      color: 'primary',
      textDecoration: 'underline',
      textUnderlinePosition: 'under',
      ':focus, :hover': {
        color: 'accent',
      },
    },
    pre: {
      borderRadius: 'default',
      backgroundColor: 'lightest',
      color: 'text',
      fontFamily: 'monospace',
      fontSize: 1,
      overflow: 'auto',
      padding: 3,

      code: {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    code: {
      backgroundColor: 'lightest',
      borderRadius: 'small',
      color: 'accent',
      fontFamily: 'monospace',
      fontSize: 'inherit',
      marginLeft: 1,
      marginRight: 1,
      paddingLeft: 1,
      paddingRight: 1,
    },
    img: {
      maxWidth: '100%',
    },
  },
};
