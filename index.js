module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
