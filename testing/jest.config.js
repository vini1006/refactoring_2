/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['./dist/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
