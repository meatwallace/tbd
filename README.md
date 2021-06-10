# tbd

![Github Actions CI workflow status](https://github.com/meatwallace/tbd/actions/workflows/ci.yml/badge.svg?branch=main)

a space for getting myself up to speed on the latest patterns & tech.

currently featuring:

- TypeScript-centric monorepo ... Yarn v2
  [workspaces](https://yarnpkg.com/features/workspaces) with
  [PnP](https://yarnpkg.com/features/pnp)
- baby's-first-todo-app ... [create-react-app](https://create-react-app.dev)
- style guide ... [theme-ui](https://theme-ui.com)
- testing ... [jest](https://jestjs.io) ...
  [testing-library](https://testing-library.com) ... [msw](https://mswjs.io)
- CI/CD ... [Github Actions](https://github.com/features/actions)

everything else is still to be determined, really.

[production app](https://tbd.vercel.app)

## quick start

```
# install yarn if you  don't have it
npm install -g yarn

# bootstrap dependencies
yarn

# start projects in development mode
yarn start:api
yarn start:styleguide
yarn start:web

# build projects for production
yarn build:api
yarn build:web
```

## inspiration & prior art

- [hackclub's theme](https://theme.hackclub.com)
- [thinkmill's monorepo guide](https://monorepo.guide) and their
  [starter](https://github.com/thinkmill/monorepo-starter)
- [mono](https://meatwallace/mono) and other earlier monorepo WIPs of mine
