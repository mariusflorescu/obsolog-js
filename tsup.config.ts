import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  target: 'node16',
  dts: {
    resolve: true,
    entry: './src/index.ts'
  }
})
