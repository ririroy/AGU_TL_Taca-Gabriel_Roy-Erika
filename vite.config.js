import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8090
  },
  define: {
    global: {}, // Define global for compatibility
    'process.env': {} // Define process.env for compatibility
  }
};