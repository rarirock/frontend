import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import('../views/ReservationView.vue')
  },
  {
    path: '/reservation-check',
    name: 'reservation-check',
    component: () => import('../views/ReservationCheck.vue')
  },
  {
    path: '/customer-center',
    name: 'customer-center',
    component: () => import('../views/CustomerCenter.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
