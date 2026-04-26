import { defineConfig } from 'tsdown'

export default defineConfig({
  attw: {
    profile: 'esm-only',
  },
  clean: false,
  copy: ['README.md'],
  dts: true,
  entry: ['src/index.ts', 'src/plugin-comments.ts'],
  format: ['esm'],
  outDir: 'dist',
  platform: 'node',
  publint: true,
  sourcemap: true,
})
