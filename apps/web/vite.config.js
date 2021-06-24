import reactRefresh from '@vitejs/plugin-react-refresh';
import reactJSX from 'vite-react-jsx';
import { defineConfig } from 'vite';

const plugins = [reactJSX()];

if (process.env.NODE_ENV !== 'test') {
  plugins.push(reactRefresh());
}

const config = defineConfig(() => {
  return {
    plugins,
  };
});

export default config;
