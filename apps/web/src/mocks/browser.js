import { setupWorker } from 'msw';
import { env } from '../configs/env';
import { handlers } from './handlers';

// if we're in development we want to mock our api endpoint
if (env.isDevelopment && !env.DISABLE_MSW) {
  const worker = setupWorker(...handlers);

  worker.start();
}
