import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
