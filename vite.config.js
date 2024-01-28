import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  ssr: true,
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 1600,
  },
  base:'/studywithomid/',
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith('add-')
  }
})
