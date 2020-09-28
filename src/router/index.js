import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: '/',
        meta: { name: 'd3' },
        component: () => import('@/views/d3/index.vue')
      },
      {
        path: '/baidumap',
        meta: { name: 'baidu-map' },
        component: () => import('@/views/baidumap/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes: [...routes],
  scrollBehavior: () => ({ y: 0 })
})
export default router