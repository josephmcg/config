import eslint from '@eslint/js'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import type { Linter } from 'eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

/**
 * React specific eslint config
 */
const config: Linter.Config[] = [
  eslint.configs.recommended,
  // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/11543
  tseslint.configs.strictTypeChecked,
  // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/11543
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
      curly: 'error', // Consistency is key for readability and maintainability
      'no-console': 'error', // Use a logger utility so logs are not rendered in production
      'no-implicit-coercion': 'error', // Prefer Boolean over !! for readability
      'no-nested-ternary': 'error', // Nested ternaries are hard to read and maintain

      '@typescript-eslint/consistent-type-assertions': [
        // Type assertions are hacky and deserve to be banned
        'error',
        { assertionStyle: 'never' },
      ],
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
      '@typescript-eslint/no-deprecated': 'off', // This rule slows down eslint performance
      '@typescript-eslint/no-empty-object-type': [
        // Allow empty prop declarations that extend react types
        'error',
        { allowInterfaces: 'always' },
      ],
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

      'unicorn/prevent-abbreviations': [
        // Some abbreviations are preferred over full words
        'error',
        {
          allowList: {
            args: true,
            params: true,
            Params: true,
            props: true,
            Props: true,
          },
        },
      ],

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
      'react/jsx-no-literals': 'error', // Enforce i18n with translation keys
      'react/prop-types': 'off', // Write proper TS, use zod for runtime validation
      'jsx-a11y/anchor-has-content': 'off', // We need this for i18n interpolation
      'jsx-a11y/heading-has-content': 'off', // We need this for i18n interpolation
      'jsx-a11y/no-autofocus': 'off', // Autofocus can be ideal UX

      // Comments
      '@eslint-community/eslint-comments/require-description': 'error', // Enforce comments when we disable an eslint rule
      '@eslint-community/eslint-comments/disable-enable-pair': 'off', // It's fair to disable a rule for an entire file
    },
  },
]

export default config
