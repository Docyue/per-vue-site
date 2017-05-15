export default {
  path: '/page2',
  component: require('@/views/page2/'),
  children: [{
    path: 'world',
    component (resolve) {
      require(['@/views/page2/world'], resolve)
    }
  }]
}
