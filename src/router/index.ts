import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior( ) {
    return { top: 0 };
  },
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
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: () => import('../views/PrivacyTermsView.vue')
    },
    {
      path: '/terms-and-conditions',
      name: 'TermsAndConditions',
      component: () => import('../views/TermsAndConditionsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUsView.vue'),
    },
  ],
})

export default router
