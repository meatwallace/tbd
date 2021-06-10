import * as envalid from 'envalid';

export const env = envalid.cleanEnv(
  // TODO: remove or update this clunky workaround when envalid issue resolved
  // source: https://github.com/af/envalid/issues/150
  { ...process.env, $$typeof: '' },

  {
    $$typeof: envalid.str(),

    NODE_ENV: envalid.str({ choices: ['development', 'test', 'production'] }),
  },
);
