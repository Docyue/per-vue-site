<template>
		<ul class="art-list">
      <li v-for="item in artListData" @click="goDetail(item.artId)">
        <span class="title">{{item.title}}</span>
        <i class="line"></i>
        <span class="content">
          {{item.date}}
        </span>
      </li>
		</ul>
</template>
<script>
export default {
  props: ['artListData'],
  methods: {
    goDetail (id) {
      this.$router.push({
        path: 'pageDetail',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style type="text/css">
  .art-list{position: relative;height: 100px;color: #ccc;}
  .art-list .content{float: right;}
</style>
