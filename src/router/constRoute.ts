import type { RouteRecordRaw } from 'vue-router';

import { Layout } from '@/layout';

// 静态路由
const constRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/dashboard/analysis/analysis.vue'),
        meta: {
          title: 'Home',
        },
      },
    ],
  },
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
