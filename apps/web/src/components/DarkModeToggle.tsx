import { Button, ThemeUICSSObject, useColorMode } from 'theme-ui';
import * as Icon from './Icon';

const styles: ThemeUICSSObject = {
  color: 'white',
};

export function DarkModeToggle() {
  const [mode, setMode] = useColorMode();

  return (
    <Button
      variant="icon"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={styles}
    >
      <Icon.DarkMode size={24} />
    </Button>
  );
}
