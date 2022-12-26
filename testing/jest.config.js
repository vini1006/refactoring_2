/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['./dist/'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
