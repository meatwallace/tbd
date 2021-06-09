module.exports = {
  displayName: {
    name: 'web',
    color: 'blue',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.js'],
  transformIgnorePatterns: ['/node_modules/(?!(use-file-input)/)'],
};
