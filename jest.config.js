/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  testEnvironment: 'jsdom',

  // Jest transformations -- this adds support for TypeScript
  // using babel-jest
  transform: {
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$':
      '<rootDir>/src/fileMock.js',
    '^.+\\.([jt]sx?)$': 'babel-jest',
    '\\.gql$': 'jest-raw-loader',
  },
  transformIgnorePatterns: [],

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['<rootDir>/src/jestSetup.js'],

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js', 'json', 'gql'],
}
