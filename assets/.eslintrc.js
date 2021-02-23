// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  env: {
    browser: true,
  },

  extends: ['plugin:vue/essential', '@vue/typescript'],

  // required to lint *.vue files
  plugins: ['vue'],

  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'no-debugger': 'error',
    'no-undef': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
