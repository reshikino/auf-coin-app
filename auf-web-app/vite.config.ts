import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Добавьте эту строку, чтобы указать, что корневая директория - это 'src'
  build: {
    outDir: '../dist', // Убедитесь, что сборка происходит в папку 'dist'
    rollupOptions: {
      input: 'public/index.html', // Убедитесь, что путь к 'index.html' указан правильно
    },
  },
});
