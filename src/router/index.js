import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/myView',
    name: 'myView',
    component: () => import('../views/MyViewOnCS.vue')
  },
  {
    path: '/myPlan',
    name: 'myPlan',
    component: () => import('../views/MyPlan.vue')
  },
  {
    path: '/Relations',
    name: 'Relations',
    component: () => import('../views/Relations.vue')
  },
  {
    path: '/Refs',
    name: 'Refs',
    component: () => import('../views/Refs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
