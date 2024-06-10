const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setup-jest.js'],
  passWithNoTests: true,
  testMatch: [
    '**/*.(spec|test).js'
  ]
};

module.exports = config;