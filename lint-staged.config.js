module.exports = {
  '**/*.ts?(x)': () => 'yarn tsc -p tsconfig.json --noEmit',
  '*.{ts,tsx}': 'yarn test --bail --findRelatedTests',
  '*.{js,ts,tsx}': 'yarn eslint --cache --fix',
  '*.{js,ts,tsx,css,md}': 'yarn prettier --write',
};
