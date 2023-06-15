module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: "tsconfig.json",
      tsconfigRootDir: __dirname,
      sourceType: "module",
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
      // indent: ['error', 2],
      "no-param-reassign": 0,

      'prettier/prettier': [
          2,
          {
              // useTabs: false,
              endOfLine: 'auto',
          },
      ],
      'no-nested-ternary': 'off',
      'react/function-component-definition': [
          2,
          {
              namedComponents: 'arrow-function',
              unnamedComponents: 'arrow-function',
          },
      ],
  },
};