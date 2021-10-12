import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/tasks/:id',
    name: 'Tasks',
    component: () => import(/* webpackChunkName: "home" */ '../views/Tasks.vue')
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import(/* webpackChunkName: "home" */ '../views/Board.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "home" */ '../views/Profile.vue')
  },
  {
    path: '/session',
    name: 'Session',
    component: () => import(/* webpackChunkName: "home" */ '../views/Session.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
