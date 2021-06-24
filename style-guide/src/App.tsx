import { theme } from '@tbd/theme';
import { ThemeProvider } from 'theme-ui';
import { StyleGuide } from './components/StyleGuide';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleGuide />
    </ThemeProvider>
  );
}
