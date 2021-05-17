module.exports = {
  '**/*.ts?(x)': () => 'yarn tsc --noEmit',
  '*.{ts,tsx}': 'yarn test --watchAll=false --bail --findRelatedTests',
  '*.{js,ts,tsx}': ['yarn prettier --write', 'yarn eslint --cache --fix'],
  '*.{css,md}': 'yarn prettier --write',
};
