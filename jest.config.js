export default {
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@openreachtech/renchan-test-tools/lib/environment/setupAfterEnv.js',
    '<rootDir>/tests/setup-after-env.js',
  ],
  moduleNameMapper: {
    '^(@.*)$': '<rootDir>/node_modules/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
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
