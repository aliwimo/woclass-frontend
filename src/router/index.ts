import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/event/IndexView.vue'),
    },
    {
      path: '/classrooms',
      name: 'classrooms',
      component: () => import('@/views/classroom/IndexView.vue'),
    },
    {
      path: '/classrooms/:classroom_id',
      name: 'classroom',
      component: () => import('@/views/classroom/ShowView.vue'),
    }

  ],
})

export default router
