import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { StyleGuide } from './components/StyleGuide';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleGuide />
    </ThemeProvider>
  );
}
