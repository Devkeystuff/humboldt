module.exports = {
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    next: {
      rootDir: './app/',
    },
    'import/resolver': {
      node: {
        paths: ['app'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  rules: {
    'require-await': 'error',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unresolved': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
