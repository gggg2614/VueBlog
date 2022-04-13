import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',redirect:'/home/Picture', component: () => import('@/views/Home/Home.vue'),
    children: [
      { path: '/home/artical', component: () => import('@/views/Artical/Artical.vue') },
      { path: '/home/picture', component: () => import('@/views/Picture/Picture.vue') },
      { path: '/home/about', component: () => import('@/views/About/About.vue') },
    ]
  }]

const router = new VueRouter({
  routes
})

export default router
