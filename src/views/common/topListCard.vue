<template>
		<ul class="art-list">
      <li class="clearfix" v-for="item in topListData" @click="goDetail(item)">
        <span class="title">{{item.title}}</span>
        <span class="content">
          {{item.date}}
        </span>
      </li>
		</ul>
</template>
<script>
export default {
  props: ['topListData'],
  methods: {
    goDetail (data) {
      this.$router.push({
        path: 'pageDetail',
        query: {
          id: data.artId,
          type: data.artType
        }
      })
    }
  }
}
</script>
<style type="text/css">
  .art-list{position: relative;height: 100px;color: #ccc;}
  .art-list .content{float: right;}
  .art-list .title{float: left;}
</style>
