import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'

Vue.use(Router)

const route = [
  {
    path: '/',
    component: Layout,
    redirect: '',
    children: [
      // 首页
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home'),
        meta: {
          title: '一站式解决通风降温、排尘除烟难题',
          titleEn: 'VENTILATION COOLING、SMOKE DUST PROBLEM',
          phone: '服务热线: xxxx-xxxxxx',
        }
      },
      // 产品中心
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/Product'),
        meta: {
          title: '众圣产品中心',
          titleEn: 'Product Center',
          phone: '服务热线: xxxx-xxxxxx'
        }
      },
      // 产品详情
      {
        path: 'product/:id',
        name: 'product-detail',
        component: () => import('@/views/Product/detail.vue'),
        meta: {
          title: '众圣产品中心',
          titleEn: 'Product Center',
          phone: '服务热线: xxxx-xxxxxx'
        }
      },
      // 联系我们
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/Contact'),
        meta: {
          title: '联系我们',
          titleEn: 'contact us',
          phone: '服务热线: xxxx-xxxxxx',
          contact: false
        }
      }
    ]
  }
]


const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: route
})

export default router