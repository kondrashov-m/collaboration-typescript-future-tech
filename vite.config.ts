// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    rollupOptions: {
      input: {
        main: 'index.html',
        blog: 'blog.html',
        news: 'news.html',
        podcasts: 'podcasts.html',
        resources: 'resources.html',
        select: 'select.html',
        contacts: 'contacts.html'
      }
    }
  }
});