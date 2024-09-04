import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/Auth/LogIn.vue'
import Register from '../views/Auth/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/login',
      name: 'auth-login',
      component: LogIn
    },
    {
      path: '/auth/register',
      name: 'auth-register',
      component: Register,
    },
  ]
})

export default router
