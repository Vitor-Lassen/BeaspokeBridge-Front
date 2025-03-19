import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/for-kids',
      name: 'ForKids',
      component: () => import('../views/courses/KidsView.vue'),
    },
    {
      path: '/for-adults',
      name: 'ForAdults',
      component: () => import('../views/courses/AdultsView.vue'),
    },
    {
      path: '/for-teachers',
      name: 'ForTeachers',
      component: () => import('../views/courses/TeachersView.vue'),
    },
    {
      path: '/exchange/Ireland',
      name: 'Irland',
      component: () => import('../views/exchanges/IrlandView.vue'),
    },
    {
      path: '/exchange/Eslovaquia',
      name: 'Esloquia',
      component: () => import('../views/exchanges/EslovaquiaView.vue'),
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: () => import('../views/ContactUsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
