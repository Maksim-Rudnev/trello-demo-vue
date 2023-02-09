import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MainView from '@/views/MainView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainView,
  },
  {
    path: '/snake',
    name: 'snake',
    component: () => import('@/components/TheSnake.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
