import { createRouter, createWebHistory } from 'vue-router'
import ProgrammesView from '../views/pages/programmes/index.vue'
import AboutView from '../views/pages/about/index.vue'
import ApplyNowView from '../views/pages/apply-now/index.vue'
import CareerView from '../views/pages/career/index.vue'
import ContactView from '../views/pages/contact/index.vue'
import LoginView from '../views/pages/login/index.vue'
import SchoolarShipView from '../views/pages/schoolar-ship/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'programmes',
      component: ProgrammesView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/apply-now',
      name: 'ApplyNow',
      component: ApplyNowView
    },
    {
      path: '/career',
      name: 'career',
      component: CareerView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/schoolar-ship',
      name: 'SchoolarShip',
      component: SchoolarShipView
    }
    
    
  ]
})

export default router
