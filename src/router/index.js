import Layout from '@/layout'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [{
      path: 'Home',
      name: 'Home',
      component: Home
      },{ 
      path: 'HomeSearch',
      name:'HomeSearch',
      component:  () => import('@/views/Home/HomeSearch')
      },{
      path: 'ShoppingCart/:params',
      name:'ShoppingCart',
      component:  () => import('@/views/ShoppingCart/ShoppingCart')
      },{
      path: 'Me',
      name:'Me',
      component: () => import('@/views/UserCenter/Me')
      },{
      path: 'MyOrder/:params',
      name:'MyOrder',
      component: () => import('@/views/UserCenter/MyOrder')
      }
    ]
  },

  {
    path: '/ProductDetail',
    name:'ProductDetail',
    component:  () => import('@/views/ProductCategory/ProductDetail')
  },

  {
    path: '/ConfirmOrder/:params',
    name:'ConfirmOrder',
    component: () => import('@/views/ShoppingCart/ConfirmOrder')
  },

  {
    path: '/MyAddress/:params',
    name:'MyAddress',
    component: () => import('@/views/UserCenter/MyAddress')
  },

  {
    path: '/NewAddress/:params',
    name:'NewAddress',
    component: () => import('@/views/UserCenter/NewAddress')
  },

  {
    path: '/RevisePersonalInfo//:params',
    name:'RevisePersonalInfo',
    component: () => import('@/views/UserCenter/RevisePersonalInfo')
  },

  {
    path: '/OrderSucceed/:params',
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