import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Work from '../views/Work.vue';
import Specials from '../views/Specials.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/specials',
    name: 'Specials',
    component: Specials
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
