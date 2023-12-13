import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import destination from '../views/destination.vue'
import crew from '../views/crew.vue'
import technology from '../views/technology.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/destination',
      name: 'destination',
      component: destination
    },
    {
      path: '/crew',
      name: 'crew',
      component: crew
    },
    {
      path: '/technology',
      name: 'technology',
      component: technology
    },
  ]
})

export default router
