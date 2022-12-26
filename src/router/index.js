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
<<<<<<< Updated upstream
=======
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
  {
    path: '/movie-home',
    name: 'movie-home',
    component: () => import('../components/MovieHome.vue')
  },
  {
    path: '/movie-detail',
    name: 'movie-detail',
    component: () => import('../components/MovieDetail.vue'),
    children:[
      {
        path: '/movie-detail/info',
        name: 'info',
        component: () => import('../components/moviedetailbar/tab_info.vue')
      },
      {
        path: '/movie-detail/review',
        name: 'review',
        component: () => import('../components/moviedetailbar/tab_review.vue')
      },
    ]
  },
  {
    path: '/movie-list',
    name: 'movie-list',
    component: () => import('../components/movieList/MovieList.vue'),
    children:[
      {
        path: '/movie-list/current',
        name: 'current',
        component: () => import('../components/movieList/currentCom.vue')
      },
      {
        path: '/movie-list/expected',
        name: 'expected',
        component: () => import('../components/movieList/expectedCom.vue')
      },
    ]
  },
  {
    path: '/event-home',
    name: 'event-home',
    component: () => import('../components/eventContents/eventHome.vue')
  },
  {
    path: '/event-theater',
    name: 'event-theater',
    component: () => import('../components/eventContents/eventTheater.vue')
  },
  {
    path: '/event-premiere',
    name: 'event-premiere',
    component: () => import('../components/eventContents/eventPremiere.vue')
  },
>>>>>>> Stashed changes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
