/**
 * 配置了路由的路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import all from '../components/all/all.vue'
import cart from '../components/cart/cart.vue'
import channel from '../components/home/channel/channel.vue'
import channelsub from '../components/channelsub/channelsub.vue'
import stroll from '../components/stroll/stroll.vue'
import index from '../components/home/index/index.vue'
import news from '../components/home/news/news.vue'
import user from '../components/user/user.vue'
import setting from '../components/setting/setting.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'



Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path:'/',
          redirect: '/home/index'
        },
        {
          path: 'index',
          // component:  goods
          component: index,
        },
        {
          path: 'news',
          // component:  goods
          component: news,
        },
        {
          path: 'channel/:id',
          // component:  goods
          component: channel,
        }
      ]
    },
    {
      path: '/all',
      component: all,
    },
    {
      path: '/stroll',
      component: stroll
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/channelsub/:id/:id',
      component:channelsub
    }
  ]

})
