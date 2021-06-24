import * as envalid from 'envalid';

export const env = envalid.cleanEnv(
  {
    NODE_ENV: import.meta.env.MODE,
  },
  {
    NODE_ENV: envalid.str({ choices: ['development', 'test', 'production'] }),
  },
);
