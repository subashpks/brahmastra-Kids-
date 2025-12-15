
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production for performance/security
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React into a separate chunk so it can be cached longer by the browser
          'vendor-react': ['react', 'react-dom'],
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
});
