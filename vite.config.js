import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// Plugin: rewrites clean URLs (/about → /about.html) in dev server
function cleanUrlsPlugin() {
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        // If the URL has no extension and isn't the root, rewrite to .html
        if (url && url !== '/' && !url.includes('.') && !url.startsWith('/@') && !url.startsWith('/src') && !url.startsWith('/node_modules')) {
          req.url = url + '.html' + (req.url?.includes('?') ? '?' + req.url.split('?')[1] : '');
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [tailwindcss(), cleanUrlsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        resume: resolve(import.meta.dirname, 'resume.html'),
        certification: resolve(import.meta.dirname, 'certification.html'),
        more: resolve(import.meta.dirname, 'more.html'),
      },
    },
  },
});
