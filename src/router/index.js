import Layout from '@/layout'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/Login',
    name:'Login',
    component: () => import('@/views/SignIn/Login')
  },

  {
    path:'/LostPassword',
    name:'LostPassword',
    component: () => import('@/views/SignIn/LostPassword'),
  },

  {
    path:'/Register',
    name:'Register',
    component: () => import('@/views/SignIn/Register'),
  },

  {
    path:'/RegisterSucceed',
    name:'RegisterSucceed',
    component: () => import('@/views/SignIn/RegisterSucceed'),
  },

  {
    path:'/QuickLogin',
    name:'QuickLogin',
    component: () => import('@/views/SignIn/QuickLogin'),
  },

  {
    path: '/',
    component: Layout,
    redirect: Home,
    children: [{
        path: 'Home',
        name: 'Home',
        component: Home
      },
      { 
        path: 'HomeSearch',
        name:'HomeSearch',
        component:  () => import('@/views/Home/HomeSearch')
      },
      {
        path: 'ShoppingCart',
        name:'ShoppingCart',
        component:  () => import('@/views/ShoppingCart/ShoppingCart')
      },
      {
        path: 'Me',
        name:'Me',
        component: () => import('@/views/UserCenter/Me')
      },
      {
        path: 'MyOrder',
        name:'MyOrder',
        component: () => import('@/views/UserCenter/MyOrder')
      },
      {
        path: 'NewDressing',
        name:'NewDressing',
        component: () => import('@/views/Home/NewDressing')
      },
      {
        path: 'BossRecommendation',
        name:'BossRecommendation',
        component: () => import('@/views/Home/BossRecommendation')
      },
      {
        path: 'ProductCategory',
        name:'ProductCategory',
        component: () => import('@/views/ProductCategory/ProductCategory')
      },
      {
        path: 'WishList',
        name:'WishList',
        component: () => import('@/views/WishList/WishList')
      }
    ]
  },

  {
    path: '/ProductCategoryInner',
    name:'ProductCategoryInner',
    component:  () => import('@/views/ProductCategory/ProductCategoryInner')
  },

  {
    path: '/ProductDetail',
    name:'ProductDetail',
    component:  () => import('@/views/ProductCategory/ProductDetail')
  },

  {
    path: '/ConfirmOrder',
    name:'ConfirmOrder',
    component: () => import('@/views/ShoppingCart/ConfirmOrder')
  },

  {
    path: '/MyAddress',
    name:'MyAddress',
    component: () => import('@/views/UserCenter/MyAddress')
  },

  {
    path: '/NewAddress',
    name:'NewAddress',
    component: () => import('@/views/UserCenter/NewAddress')
  },

  {
    path: '/RevisePersonalInfo',
    name:'RevisePersonalInfo',
    component: () => import('@/views/UserCenter/RevisePersonalInfo')
  },

  {
    path: '/OrderSucceed',
    name:'OrderSucceed',
    component: () => import('@/views/ShoppingCart/OrderSucceed')
  },

  { 
  path:'*',
  component:Home
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