import App from '@/App.vue'
import '@/icons' // icon
// import '@/permission' // permission control
import '@/permission'
import router from '@/router'
import store from '@/store'
import moment from 'moment'
import 'normalize.css'
import { Col, Lazyload, Row } from 'vant'
import Vue from 'vue'

Vue.use(Col).use(Row);

Vue.use(Lazyload, {
  lazyComponent: true,
});

Vue.config.productionTip = false


// 定义时间格式全局过滤器
Vue.filter('dateFormat', function (daraStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(daraStr).format(pattern)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
