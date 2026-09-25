export default {
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup-after-env.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
}
