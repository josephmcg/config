import { defineConfig } from 'tsdown'

export default defineConfig({
  attw: {
    profile: 'esm-only',
  },
  clean: false,
  copy: ['README.md'],
  deps: {
    neverBundle: ['eslint', '@eslint/core', '@types/json-schema', '@types/estree'],
  },
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  platform: 'node',
  sourcemap: true,
})
