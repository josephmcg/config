import { Linter } from 'eslint'

const rules: Linter.Config['rules'] = {
  curly: 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'enum',
      format: ['PascalCase'],
    },
  ],
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  'react/prop-types': 'off', // use zod if you need runtime validation
  'unicorn/filename-case': [
    'error',
    {
      cases: { camelCase: true, pascalCase: true, kebabCase: true },
    },
  ],
  'unicorn/prevent-abbreviations': [
    'error',
    {
      ignore: ['\\.*', /^ignore/i],
    },
  ],
}

export default rules
