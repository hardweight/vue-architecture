import Vue from 'vue'
import Router from 'vue-router'
import Users from './views/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    }
  ]
})
