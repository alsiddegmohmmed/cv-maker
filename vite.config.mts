import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config
export default defineConfig({
  base: '/cv-maker/',
  resolve: { alias: { '@': '/src' } },
  plugins: [
    react(),
    VitePWA({
      srcDir: 'src',
      filename: 'sw.ts',
      manifest: false,
      injectRegister: null,
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      injectManifest: {
        globPatterns: ['**/*.{html,css,js,png,woff2,webmanifest}']
      }
    })
  ],
  // https://vitest.dev/config
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom',
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    coverage: { all: true, include: ['src/**/*.{ts,tsx}'] }
  }
});