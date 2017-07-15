import Vue from 'vue'
import app from './app'
import router from './router'
import Resource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vscroll  from 'vue-scroller'
// 需要在main中声明执行mock.js

Vue.use(Resource)
Vue.use(VueAwesomeSwiper)
Vue.use(Vscroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
