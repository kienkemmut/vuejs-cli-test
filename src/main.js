// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import './assets/styles/main.scss'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import './mixins/common.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
