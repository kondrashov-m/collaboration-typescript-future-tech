// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    extensions: ['.ts', '.js'], // Добавляем поддержку .ts расширений
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        news: path.resolve(__dirname, 'news.html'),
        podcasts: path.resolve(__dirname, 'podcasts.html'),
        resources: path.resolve(__dirname, 'resources.html'),
        select: path.resolve(__dirname, 'select.html'),
        contacts: path.resolve(__dirname, 'contacts.html')
      }
    }
  }
});