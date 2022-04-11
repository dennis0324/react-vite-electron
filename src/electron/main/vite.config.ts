import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import * as pkg from '../../../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root:__dirname,
  base:'./',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build:{
    emptyOutDir: true,
    lib: {
      entry: 'main.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs',
    },
    minify : false,
    outDir: path.join(process.cwd(),"js/electron/main/"),
    // sourcemap: true,
    rollupOptions: {
      external: [
        'electron',
        ...builtinModules,
        ...Object.keys(pkg.dependencies || {})
      ],
    },
  },
})
