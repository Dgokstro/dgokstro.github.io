import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/dgokstro.github.io/',
  publicDir:'./dist',
  plugins: [react()],
})
