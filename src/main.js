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
import Toasted from 'vue-toasted'

global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(Toasted)

let options = {
  position: 'top-center',
  mode: 'override',
  duration: 2000,
  type: 'error'
}

Vue.toasted.register('showMessage',
  (payload) => {
    if (!payload.message) {
      return 'Oops.. Something Went Wrong..'
    }
    return payload.message
  },
  options
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
