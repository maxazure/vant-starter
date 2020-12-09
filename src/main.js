import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import 'normalize.css'


import '@/icons' // icon
// import '@/permission' // permission control
import moment from 'moment'

import { Col, Row } from 'vant';
Vue.use(Col).use(Row);

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
