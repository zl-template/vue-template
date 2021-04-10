// @ts-nocheck
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/home/home.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      alias: '/home',
      component: Home
    }
  ],
  mode: 'hash'
})

export default router