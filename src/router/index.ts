import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/classroom/IndexView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/event/IndexView.vue'),
    },
    {
      path: '/classrooms/:classroom_id',
      name: 'classroom',
      component: () => import('@/views/classroom/ShowView.vue'),
    }

  ],
})

export default router
