import type { RouteRecordRaw } from 'vue-router';

// 静态路由
const constRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },
  // {
  //   path: '/error',
  //   name: 'error',
  //   component: () => import('~/pages/exception/error.vue'),
  // },
  // {
  //   path: '/redirect/:path(.*)',
  //   name: 'redirect',
  //   component: () => import('~/pages/redirect/index.vue'),
  // },
  // 404页面
  {
    path: '/:pathMatch(.*)*',
    name: '404Route',
    meta: { title: '404' },
    component: () => import('@/views/404/404.vue')
  },
];

export default constRoutes;
