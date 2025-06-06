import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(),tailwindcss()],
  build: {
    outDir: 'dist', // Vercel expects this as the default
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/',
})
