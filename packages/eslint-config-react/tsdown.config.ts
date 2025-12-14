import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: {
    resolve: true,
    entry: './src/index.ts',
  },
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  target: false,
})
