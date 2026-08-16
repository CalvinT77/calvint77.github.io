import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './', // Ensures relative assets for GitHub Pages (calvint77.github.io)
  server: {
    port: 3000,
    open: false,
  }
});
