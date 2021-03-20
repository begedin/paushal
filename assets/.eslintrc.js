// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  env: {
    browser: true,
  },

  // required to lint *.vue files
  plugins: ['eslint-plugin-vue'],
  
  extends: ['plugin:vue/essential', '@vue/typescript'],


  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'no-debugger': 'error',
    'no-undef': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
