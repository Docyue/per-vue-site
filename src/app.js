/* 启动文件 */
import Vue from 'vue'
import store from '@/store/'
import router from '@/routes/'
import App from '@/components/App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

if (__DEV__) {
  console.info('[当前环境] 开发环境')
  Vue.config.devtools = true
  Vue.config.productionTip = false
}

if (__PROD__) {
  console.info('[当前环境] 生产环境')
  Vue.config.devtools = false
}
