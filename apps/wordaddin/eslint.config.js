// eslint.config.js
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'plugin:@nx/react',
    './.eslintrc.json',  // Ensure the path is correct
    'plugin:office-addins/react',
  ],
  ignorePatterns: ['!**/*'],
  parserOptions: {
    project: 'tsconfig.base.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
});
