export default {
  path: '/page1',
  component: require('@/views/page1/'),
  children: [{
    path: 'hello',
    component (resolve) {
      require(['@/views/page1/hello'], resolve)
    }
  }]
}
