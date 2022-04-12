import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root:__dirname,
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@component', replacement: path.resolve(__dirname, './src/component') },
    ],
  },
  base:'./',
  build:{
    emptyOutDir: true,
    outDir: path.join(process.cwd(),"js/react")
  }
})
