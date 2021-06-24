import * as envalid from 'envalid';

// TODO: review vite's .env processing
export const env = envalid.cleanEnv(
  {
    DISABLE_MSW: import.meta.env.VITE_DISABLE_MSW,
    NODE_ENV: import.meta.env.MODE,
  },
  {
    NODE_ENV: envalid.str({ choices: ['development', 'test', 'production'] }),
    DISABLE_MSW: envalid.bool({ default: true, devDefault: false }),
  },
);
