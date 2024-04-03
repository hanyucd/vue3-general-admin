import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import UnoCSS from 'unocss/vite';

import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    UnoCSS(),
    // eslintPlugin(),
    // 按需导入组件 api| https://zhuanlan.zhihu.com/p/612397686
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'vue-i18n',
        'pinia',
        // 自定义预设
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      // 如果使用了 eslint，需要设置 eslintrc 字段，
      // 插件会在项目根目录生成类型文件 .eslintrc-auto-import.json ，确保该文件在 eslint 配置中被 extends
      eslintrc: {
        enabled: true,
      },
    }),
    // 按需导入组件
    Components({
      dts: 'src/components.d.ts', // generate `components.d.ts` global declarations
      resolvers: [NaiveUiResolver()],
    }),
  ]
});
