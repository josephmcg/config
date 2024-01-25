import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: {
    resolve: true,
    entry: './index.ts',
  },
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
})
