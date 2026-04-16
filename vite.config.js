import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['laghman.uk'],
    proxy: {
      '/health': 'http://127.0.0.1:5050',
      '/top-trades': 'http://127.0.0.1:5050',
      '/flow-intelligence': 'http://127.0.0.1:5050',
      '/ai': 'http://127.0.0.1:5050',
      '/ingest': 'http://127.0.0.1:5050',
      '/api': 'http://127.0.0.1:5050'
    }
  }
})
