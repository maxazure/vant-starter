import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Toast } from 'vant'
import router from './router'
import store from './store'
import { getToken } from './utils/auth'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/Login','/LostPassword','/Register','/RegisterSucceed','/QuickLogin'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/Login') {
      // if is logged in, redirect to the home page
      next({ name: 'Home' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')

          next()
        } 
        catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Toast.error(error || 'Has Error')
          next(to.path)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    }
    else {
      // other pages that do not have permission to access are redirected to the login page.
      next({name:'Login'})
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
