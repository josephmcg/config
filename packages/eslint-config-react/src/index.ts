import eslint from '@eslint/js'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import tseslint, {
  type InfiniteDepthConfigWithExtends,
} from 'typescript-eslint'

/**
 * Base config that can be extended by other packages
 */
export const baseConfig: InfiniteDepthConfigWithExtends = [
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,
  // @ts-expect-error https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
  reactPlugin.configs.flat.recommended,
  // @ts-expect-error https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  comments.recommended,
  // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
  // Make sure it's always the last config, so it gets the chance to override other configs.
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'simple-import-sort': eslintPluginImportSort,
      'unused-imports': eslintPluginUnusedImports,
    },
    rules: {
      curly: 'error', // Easier to read and maintain code
      'no-console': 'error', // Use a logger utility so logs are not rendered in production
      'no-implicit-coercion': 'error', // Prefer Boolean over !! for readability
      'no-nested-ternary': 'error', // Prefer guard clauses for readability

      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'always' },
      ], // Allow empty prop declarations that extend react types
      '@typescript-eslint/no-unused-vars': [
        // https://typescript-eslint.io/rules/no-unused-vars/#what-benefits-does-this-rule-have-over-typescript
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'never' },
      ], // Type assertions are hacky and deserve to be banned
      '@typescript-eslint/no-deprecated': 'off', // This rule slows down eslint performance
      '@typescript-eslint/naming-convention': [
        'error',
        {
          // Boolean variables are prefixed to reflect their binary nature
          selector: 'variable',
          types: ['boolean'],
          format: ['StrictPascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
        {
          // Interfaces and Types are PascalCase
          selector: ['interface', 'typeAlias'],
          format: ['StrictPascalCase'],
        },
        {
          // Generic type parameters start with letter T, followed by PascalCase
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: { regex: '^T[A-Z]', match: true },
        },
      ],

      // 'unicorn/prevent-abbreviations': [
      // // Some abbreviations are preferred over full words
      //   'error',
      //   {
      //     allowList: {
      //       props: true,
      //       Props: true,
      //       params: true,
      //       Params: true,
      //       args: true,
      //       ctx: true,
      //       i: true,
      //     },
      //   },
      // ],

      // Import DX
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',

      'no-restricted-syntax': [
        'error',
        // Tree-shakeable zod imports
        {
          selector:
            "ImportDeclaration[source.value='zod'] ImportDefaultSpecifier",
          message: "Use destructured import instead: import { z } from 'zod'",
        },
        // Prevent modules from exporting code that it does not own. This muddies module ownership and leads to circular dependencies.
        {
          selector:
            'Program > ImportDeclaration[specifiers.length=1] + ExportNamedDeclaration[specifiers.length=1]:not([source])',
          message:
            'Do not export a module that is imported. Import directly from the module where it was declared.',
        },
        {
          selector:
            'Program > ImportDefaultDeclaration ~ ExportDefaultDeclaration',
          message:
            'Do not export a module that is imported. Import directly from the module where it was declared.',
        },
      ],

      // React
      'react/prop-types': 'off', // Write proper TS, use zod for runtime validation
      'jsx-a11y/no-autofocus': 'off', // Autofocus can be ideal UX
      'jsx-a11y/anchor-has-content': 'off', // We intentionally don't hard code anchor content for i18n interpolation

      // Comments
      '@eslint-community/eslint-comments/require-description': 'error', // Enforce comments when we disable an eslint rule
      '@eslint-community/eslint-comments/disable-enable-pair': 'off', // It's fair to disable a rule for an entire file
    },
  },
]
// extends: [
//   'eslint:recommended',
//   'plugin:@typescript-eslint/strict-type-checked',
//   'plugin:@typescript-eslint/stylistic-type-checked',
//   'plugin:react/recommended',
//   'plugin:react-hooks/recommended',
//   'plugin:jsx-a11y/recommended',
//   'plugin:unicorn/recommended',
// ],
// ignorePatterns: [
//   '**/package-lock.json',
//   '**/pnpm-lock.yaml',
//   '**/node_modules/**',
//   '**/dist/**',
//   '.next',
// ],
// plugins: [
//   '@typescript-eslint',
//   'react',
//   'jsx-a11y',
//   'simple-import-sort',
//   'unused-imports',
// ],
// rules: {
//   curly: 'error',
//   // imports
//   'simple-import-sort/imports': 'error',
//   'simple-import-sort/exports': 'error',
//   'unused-imports/no-unused-imports': 'error',
//   // unicorn overrides
//   'unicorn/prevent-abbreviations': 'off',
//   // React
//   'react/prop-types': 'off', // Use zod if you need runtime validation
//   // TS
//   '@typescript-eslint/explicit-function-return-type': 'error',
//   '@typescript-eslint/naming-convention': [
//     'error',
//     {
//       selector: 'enum',
//       format: ['StrictPascalCase'],
//     },
//     {
//       selector: 'variable',
//       types: ['boolean'],
//       format: ['StrictPascalCase'],
//       prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
//     },
//     {
//       selector: 'interface',
//       format: ['StrictPascalCase'],
//     },
//     {
//       selector: 'typeAlias',
//       format: ['StrictPascalCase'],
//     },
//     {
//       // Generic type parameter must start with letter T, followed by any uppercase letter
//       selector: 'typeParameter',
//       format: ['PascalCase'],
//       custom: { regex: '^T[A-Z]', match: true },
//     },
//   ],
//   '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//   '@typescript-eslint/no-empty-interface': [
//     'error',
//     { allowSingleExtends: true },
//   ],
// },

// const config = {
// ...baseConfig,
// extends: [
//   ...baseConfig.extends,
//   // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
//   // Make sure it's always the last config, so it gets the chance to override other configs.
//   'prettier',
// ],
// globals: {
//   React: 'readonly',
// },
// parser: '@typescript-eslint/parser',
// parserOptions: {
//   ecmaFeatures: {
//     jsx: true,
//   },
//   ecmaVersion: 2022,
//   // following line required for `plugin:@typescript-eslint/strict-type-checked`
//   project: './tsconfig.json',
//   sourceType: 'module',
// },
// settings: {
//   react: {
//     version: 'detect',
//   },
// },
// } as const satisfies Linter.Config

// export default config
