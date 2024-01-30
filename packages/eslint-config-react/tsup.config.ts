import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: {
    resolve: true,
    entry: './index.ts',
  },
  entry: ['index.ts'],
  format: ['cjs'],
  outDir: 'dist',
  esbuildOptions: (options) => {
    options.footer = {
      // builds package with a default export, since that's how ESLint expects plugins to look.
      // ? https://github.com/egoist/tsup/issues/572#issuecomment-1060599574
      js: 'module.exports = module.exports.default;',
    }
  },
})
