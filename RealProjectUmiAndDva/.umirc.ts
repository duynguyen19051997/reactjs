import { defineConfig } from 'umi';

export default defineConfig({
  locale: { antd: true },
  routes: [{ path: '/', component: '@/pages/products' }],
});
