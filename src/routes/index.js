import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        needLogin: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        needLogin: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to.meta, from.meta)
  if (to.meta.needLogin) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      // 不写next()，页面不会跳转
    }
  } else {
    next()
  }
})
Vue.use(VueRouter)

export default router
