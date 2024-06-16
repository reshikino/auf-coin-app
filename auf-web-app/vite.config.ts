import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure that assets are correctly resolved
  build: {
    rollupOptions: {
      input: 'public/index.html'
    }
  }
});
