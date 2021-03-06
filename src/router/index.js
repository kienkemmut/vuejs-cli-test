import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
  ]

})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
