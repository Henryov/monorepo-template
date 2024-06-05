import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue',
          { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] }
        ],
        dts: './src/types/auto-imports.d.ts'
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dts: './src/types/components.d.ts'
      })
    ],
    server: {
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
})
