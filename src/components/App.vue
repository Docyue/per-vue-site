<template>
  <header class="header-content">
    <router-link to="/" class="header-item">首页</router-link>
    <router-link to="/page1" class="header-item">好文转载</router-link>
    <router-link to="/page2" class="header-item">风景如画</router-link>
    <!-- <router-link to="/whatever" v-class="header-item">404</router-link><hr> -->
    <router-view></router-view>
  </header>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
.header-content {
  margin: 30px;
}
.header-item{display: inline-block;padding:5px 20px;}
.router-link-active{border-bottom: 1px solid #ccc;}
</style>
