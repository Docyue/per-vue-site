// 不同功能模块的路由应代码分离
import pageFirst from './pageFirst'
import pageSecond from './pageSecond'
import pageDetail from './pageDetail'

export default [
  {
    path: '/home',
    alias: '/',
    component (resolve) {
      require(['@/views/home'], resolve)
    }
  },
  pageFirst,
  pageSecond,
  pageDetail,
  { // 404 置后
    path: '*',
    component: {
      beforeCreate () {
        window.swal({
          type: 'warning',
          title: '404 NOT FOUND',
          timer: 1000,
          showConfirmButton: false
        })
        this.$router.replace('/')
      },
      template: '<div></div>'
    }
  }
]
