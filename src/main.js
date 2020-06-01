import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { $apis } from './helper'

import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import '@/scss/common.scss'

Vue.prototype.$apis = $apis
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
