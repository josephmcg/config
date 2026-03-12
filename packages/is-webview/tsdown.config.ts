import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: false,
  copy: ['README.md'],
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  platform: 'neutral',
  sourcemap: true,
})
