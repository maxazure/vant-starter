import Layout from '@/layout'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'Home',
      component: Home
      }
    ]
  },

  {
    path: '/ProductDetail',
    name:'ProductDetail',
    component:  () => import('@/views/ProductCategory/ProductDetail')
  },

  {
    path: '/ShoppingCart',
    name:'ShoppingCart',
    component:  () => import('@/views/ShoppingCart/ShoppingCart')
  },

  {
    path: '/ConfirmOrder',
    name:'ConfirmOrder',
    component: () => import('@/views/ShoppingCart/ConfirmOrder')
  },

  {
    path: '/MyAdress',
    name:'MyAdress',
    component: () => import('@/views/UserCenter/MyAdress')
  },

  {
    path: '/NewAdress',
    name:'NewAdress',
    component: () => import('@/views/UserCenter/NewAdress')
  },

  {
    path: '/RevisePersonalInfo',
    name:'RevisePersonalInfo',
    component: () => import('@/views/UserCenter/RevisePersonalInfo')
  },

  {
    path: '/MyOrder',
    name:'MyOrder',
    component: () => import('@/views/UserCenter/MyOrder')
  },

  {
    path: '/OrderSucceed',
    name:'OrderSucceed',
    component: () => import('@/views/ShoppingCart/OrderSucceed')
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router