import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@babel/polyfill'
import App from '@/App'
import router from './router'
import store from './store'

const axiosInstance = axios.create({
  baseURL: process.env.BASE_ENDPOINT
})

Vue.use(VueAxios, axiosInstance)

Vue.config.productionTip = process.env.NODE_ENV !== 'development'
Vue.config.devtools = process.env.NODE_ENV !== 'production'
Vue.config.performance = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
