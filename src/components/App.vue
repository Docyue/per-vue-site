<template>
  <div class="main-content">
    <router-link to="/">/首页</router-link>&emsp;
    <router-link to="/page1">/列表页1</router-link>&emsp;
    <router-link to="/page2">/列表页2</router-link>&emsp;
    <router-link to="/whatever">404</router-link><hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
.main-content {
  margin: 30px;
}
</style>
