import 'jest-extended';

import { server } from './mocks/server';

// setup and teardown for our service mocks using msw
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
