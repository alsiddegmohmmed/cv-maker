import react from '@vitejs/plugin-react-swc';
import { vite } from 'million/compiler';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config
export default defineConfig({
  base: '/cv-maker/',
  plugins: [
    react(),
    vite({ auto: true }),
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
  resolve: { alias: { '@': '/src' } },
  // https://vitest.dev/config
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'jsdom',
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    coverage: { all: true, include: ['src/**/*.{ts,tsx}'] }
  }
});