import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/event/IndexView.vue'),
    },
    {
      path: '/classrooms',
      name: 'classroom',
      meta: { requiresAuth: true },
      component: () => import('@/views/classroom/IndexView.vue'),
    },
    {
      path: '/classrooms/:classroom_id',
      name: 'classroom',
      meta: { requiresAuth: true },
      component: () => import('@/views/classroom/ShowView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
