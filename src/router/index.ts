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
      path: '/courses',
      name: 'Cursos',
      component: () => import('../views/courses/CoursesView.vue'),
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
      path: '/for-company',
      name: 'ForCompany',
      component: () => import('../views/courses/CompanyView.vue'),
    },
    {
      path: '/exchange-Ireland',
      name: 'Irland',
      component: () => import('../views/exchanges/IrlandView.vue'),
    },
    {
      path: '/exchange-Eslovaquia',
      name: 'Esloquia',
      component: () => import('../views/exchanges/EslovaquiaView.vue'),
    },
    {
      path: '/exchange-Malta-E-Gozo',
      name: 'Malta E Gozo',
      component: () => import('../views/exchanges/MaltaEGozoView.vue'),
    },
   {
      path: '/exchange',
      name: 'Intercambio',
      component: () => import('../views/exchanges/ExchangeView.vue'),
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
      path: '/parcerias',
      name: 'Parcerias',
      component: () => import('../views/Partnerships/ParceriasView.vue')
    },
    {
      path: '/tracktest',
      name: 'Parcerias - Track Test',
      component: () => import('../views/Partnerships/TrackTestView.vue')
    },
    {
      path: '/dne',
      name: 'Parcerias - DNE',
      component: () => import('../views/Partnerships/DneView.vue')
    },

    {
      path: '/podcasts',
      name: 'Podcasts',
      component: () => import('../views/PodcastsView.vue')
    },
    {
      path: '/webinars',
      name: 'Webinars',
      component: () => import('../views/WebnairView.vue')
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/bels',
      name: 'Parcerias - BELS',
      component: () => import('../views/Partnerships/schools/bellsView.vue')
    },
    {
      path: '/bridge',
      name: 'Parcerias - The Bridge',
      component: () => import('../views/Partnerships/schools/bridgeView.vue')
    },
    {
      path: '/isi',
      name: 'Parcerias - ISI Dublin',
      component: () => import('../views/Partnerships/schools/isiView.vue')
    },
        {
      path: '/atc',
      name: 'Parcerias - ATC',
      component: () => import('../views/Partnerships/schools/atcView.vue')
    }
    ,
        {
      path: '/hlt-digital',
      name: 'HLT Digital',
      component: () => import('../views/HltDigitalView.vue')
    }
  ],
})

export default router
