// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
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
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});