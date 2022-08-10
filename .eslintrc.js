module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-console': 2,
        'prettier/prettier': 2,
        // base
        'no-spaced-func': 'off',
        'no-plusplus': 'off',
        'arrow-body-style': 'warn',
        'class-methods-use-this': [
          2,
          {
            exceptMethods: ['render'],
          },
        ],
        'no-unused-expressions': 'off',
        'no-confusing-arrow': 'off',
        'global-require': 'off',
        'no-underscore-dangle': 'off',
        'object-curly-newline': 'off',
        indent: 'off',
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'func-names': 'off',
        camelcase: 'off',
        'no-shadow': 'off',
        'no-await-in-loop': 'error',
        curly: 'error',
        'no-async-promise-executor': 'off',
        quotes: 'error',
        'comma-dangle': 'off',
        'object-shorthand': ['error', 'always'],
        'prefer-template': 'error',
        // prettier
        'prettier/prettier': 'error',
        // import
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-named-as-default': 'off',
        // react
        'react/jsx-filename-extension': 'off',
        'react/no-array-index-key': 'off',
        'react/forbid-prop-types': 'off',
        'react/prefer-stateless-function': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        /**
         * In order for `react-hooks/rules-of-hooks` to work components must be PascalCase functions
         * Not sure we can enforce this, but we can enforce components to have `displayName` which will work in the same way in most cases
         * https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce
         */
        'react/display-name': 'error',
        'react/jsx-key': 'error',
        'react/no-unused-prop-types': 'error',
        // react-hooks
        'react-hooks/exhaustive-deps': 'warn',
        // react-native
        'react-native/no-inline-styles': 'error',
        // @typescript-eslint
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-shadow': 'error',
      },
    },
  ],
};
