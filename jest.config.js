/* eslint-disable no-undef */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json', 'vue'],
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    '^@vue/test-utils$': require.resolve('@vue/test-utils'),
  },
  cache: false,
};
