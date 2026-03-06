import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const srcPath = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts',
      resolvers: [
        ElementPlusResolver({
          importStyle: 'css',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': srcPath,
    },
  },
  build: {
    rollupOptions: {
      input: {
        web: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
})
