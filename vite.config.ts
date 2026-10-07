import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173, strictPort: true },
  build: {
    rolldownOptions: {
      input: {
        english: fileURLToPath(new URL('./index.html', import.meta.url)),
        spanish: fileURLToPath(new URL('./es/index.html', import.meta.url)),
      },
    },
  },
})
