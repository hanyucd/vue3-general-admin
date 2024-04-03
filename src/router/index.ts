import { createRouter, createWebHistory } from 'vue-router';
import constRoute from './constRoute';

const router = createRouter({
  routes: [...constRoute],
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.VITE_APP_BASE ?? '/'),
});

export default router;
