const { join } = require('path');

/**
 * ESLint configuration for TypeScript
 */
module.exports = {
  extends: join(__dirname, 'index.js'),
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/class-name-casing': 'warn',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-namespace': ['error', { 'allowDeclarations': true }],
    '@typescript-eslint/dot-notation': ['error', { allowPrivateClassPropertyAccess: true }],
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/camelcase': ['error', { genericTypes: 'always' }],
    '@typescript-eslint/ban-types': ['warn', {
      types: {
        "{}": {
          "message": "Use an object instead",
          "fixWith": "object"
        },
        "Number": {
          "message": "Use `number` instead",
          "fixWith": "number"
        },
        "String": {
          "message": "Use `string` instead",
          "fixWith": "string"
        }
      }
    }],
    'dot-notation': 'off',
    camelcase: 'off' // Use TS ESLint's instead of the normal one
  }
};