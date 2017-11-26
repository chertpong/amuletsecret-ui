import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AuthenticatePage from '@/pages/Authenticate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/authenticate',
      name: 'Authenticate',
      component: AuthenticatePage
    }
  ]
})
