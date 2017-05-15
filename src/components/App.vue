<template>
  <div class="main-content">
    <router-link to="/">/首页</router-link>&emsp;
    <router-link to="/page1">/好文转载</router-link>&emsp;
    <router-link to="/page2">/风景如画</router-link>&emsp;
    <!-- <router-link to="/whatever">404</router-link><hr> -->
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
