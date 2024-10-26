import { Linter } from 'eslint'

const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
  ],
  ignorePatterns: [
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/node_modules/**',
    '**/dist/**',
    '.next',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'simple-import-sort',
    'unused-imports',
  ],
  rules: {
    curly: 'error',

    // imports
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',

    // unicorn overrides
    'unicorn/filename-case': [
      'error',
      {
        cases: { camelCase: true, pascalCase: true, kebabCase: true },
      },
    ],
    'unicorn/prevent-abbreviations': 'off',

    // React
    'react/prop-types': 'off', // Use zod if you need runtime validation

    // TS
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['StrictPascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'typeAlias',
        format: ['StrictPascalCase'],
      },
      {
        // Generic type parameter must start with letter T, followed by any uppercase letter
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: { regex: '^T[A-Z]', match: true },
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
} as const satisfies Linter.Config

export default config
