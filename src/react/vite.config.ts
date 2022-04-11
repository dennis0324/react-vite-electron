import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root:__dirname,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base:'./',
  build:{
    emptyOutDir: true,
    outDir: path.join(process.cwd(),"js/react")
  }
})
