<template>
		<ul class="art-list">
      <li class="clearfix" v-for="item in topListData" @click="goDetail(item)">
        <span class="head">{{item.head}}</span>
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
          id: data.id,
          type: data.type
        }
      })
    }
  }
}
</script>
<style type="text/css">
  .art-list{position: relative;height: 100px;color: #666;}
  .art-list .content{float: right;}
  .art-list .head{float: left;}
  .art-list li:hover{color:#999;}
</style>
