import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import fs from 'fs';
import path from 'path';

const repoName = 'soldax';

export default defineConfig({
  plugins: [react(), svgr()],
  base: `/${repoName}/`,
  server: {
    host: '127.0.0.1',
    port: 5173,
    https: {
      key: fs.readFileSync(path.resolve('./certs/localhost-key.pem')),
      cert: fs.readFileSync(path.resolve('./certs/localhost.pem')),
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5264',
        changeOrigin: true,
        secure: false, // Для локального HTTPS
        rewrite: (path) => path,
      },
    },
  },
  define: {
    'process.env': {},
    'process.env.TELEGRAM_WEBAPP': JSON.stringify(true),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
