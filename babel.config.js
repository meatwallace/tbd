// TODO: swap to explicit babel configuration with workspace specific overrides.
module.exports = {
  presets: [
    // using create-react-app's preset to get this off the ground.
    ['react-app', { runtime: 'automatic', flow: false, typescript: true }],
    'babel-preset-vite',

    // [('@babel/preset-env', { targets: { node: 'current' } })],
    // '@babel/preset-react',
    // '@babel/preset-typescript',
  ],
};
