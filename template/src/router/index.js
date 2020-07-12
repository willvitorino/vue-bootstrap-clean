import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  const { access } = localStorage
  if (to.name !== 'login' && !access) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
