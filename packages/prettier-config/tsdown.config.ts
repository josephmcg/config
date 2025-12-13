import { defineConfig } from 'tsdown'

export default defineConfig({
  attw: {
    profile: 'esm-only',
  },
  dts: true,
  format: ['esm'],
  sourcemap: true,
  outDir: 'dist',
  entry: ['src/index.ts'],
  platform: 'node',
  copy: ['README.md'],
  clean: false,
})
