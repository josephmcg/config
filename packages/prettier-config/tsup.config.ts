import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  format: ['esm'],
  sourcemap: true,
  outDir: 'dist',
  entry: ['src/index.ts'],
  platform: 'node',
  publicDir: true,
})
