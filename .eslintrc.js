module.exports = {
  root: true, // don't look for any more eslint configs
  parser: '@typescript-eslint/parser', // use the typescript eslint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // same as 2021
    sourceType: 'module', // allow use of imports
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  plugins: ['jest'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: {
    'jest/globals': true,
    es2020: true,
    node: true,
    jest: true,
  },
}
