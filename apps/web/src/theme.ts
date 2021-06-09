import { Theme } from '@theme-ui/css';

const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
};

export const theme: Theme = {
  // config
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,

  // styles
  breakpoints: ['32em', '48em', '64em', '96em', '128em'],
  colors: {
    // brand
    primary: '#2d248a',
    accent: '#614ad3',
    secondary: '#e42c64',

    // greyscale
    lightest: '#f1f3f8',
    light: '#d6e0f0',
    neutral: '#8d93ab',
    dark: '#393b44',
    darkest: '#161616',

    // mixed colors
    red: '#ec3750',
    orange: '#ff8c37',
    yellow: '#f1c40f',
    green: '#33d6a6',
    cyan: '#5bc0de',
    blue: '#338eda',
    purple: '#a633d6',

    // ui component mapping
    background: '#f9fafc',
    text: '#161616',
    placeholder: '#8d93ab',
    sheet: '#f1f4f8',
    border: '#d6e0f0',

    // dark mode
    modes: {
      dark: {
        backgrouund: '#161616',
        text: '#f1f3f8',
        placeholder: '#393b44',
        sheet: '#0f0f0f',
        border: '#1a1b21',
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
