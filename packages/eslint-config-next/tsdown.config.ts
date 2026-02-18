import { defineConfig } from 'tsdown'

export default defineConfig({
  attw: {
    profile: 'esm-only',
  },
  clean: false,
  copy: ['README.md'],
  dts: true,
  entry: ['src/index.ts'],
  external: ['eslint', '@eslint/core', '@types/json-schema', '@types/estree'],
  format: ['esm'],
  outDir: 'dist',
  platform: 'node',
  sourcemap: true,
})
