module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'jest', 'jest-formatting'],
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'import/extensions': [
      'warn',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],

    // 'no-undef': 'off',
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx', '**/test/**/*.*'],
      plugins: ['jest', 'jest-formatting'],
      env: {
        'jest/globals': true,
      },
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
      ],
      rules: {
        'jest/lowercase-name': 'off',
        'jest/no-hooks': 'off',
        'jest/expect-expect': 'warn',
      },
    },
  ],
};
