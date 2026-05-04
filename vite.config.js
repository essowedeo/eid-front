import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        participer: resolve(__dirname, 'participer.html'),
        creer: resolve(__dirname, 'creer.html'),
        rejoindre: resolve(__dirname, 'rejoindre.html'),
        equipe: resolve(__dirname, 'equipe.html'),
        equipes: resolve(__dirname, 'equipes.html'),
        concours: resolve(__dirname, 'concours.html'),
        confirmation: resolve(__dirname, 'confirmation.html'),
        reglement: resolve(__dirname, 'reglement.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
  server: {
    port: 5173,
    allowedHosts: ['clay-fame-stunner.ngrok-free.dev'],
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
});
