import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import('@/views/Show/Show.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/Register.vue'),
  },
  {
    path: '/custom',
    name: 'Custom',
    component: () => import('@/views/Custom/Custom.vue'),
  },
  {
    path: '/educate',
    name: 'Educate',
    component: () => import('@/views/Educate/Educate.vue'),
  },
  {
    path: '/educate2',
    name: 'Educate2',
    component: () => import('@/views/Educate2/Educate2.vue'),
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('@/views/Travel/Travel.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 滚动到顶部
    return { top: 0 }
  },
})

export default router
