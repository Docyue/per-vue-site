<template>
  <ul class="first-page-list">
  	<li v-for="item in artListdata" class="clearfix" @click="goDetail(item)">
      <span class="fl head">[{{item.tag}}]</span>
  		<span class="item-left">{{item.head}}</span>
  		<span class="item-right">{{item.date}}</span>
  	</li>
  </ul>
</template>
<script>
import api from '../../api/index.js'
export default {
  name: 'pageFirst',
  data () {
    return {
      artListdata: []
    }
  },
  mounted () {
    this.getListData()
  },
  methods: {
    getListData () {
      let vue = this
      api.getListData().then(function (data) {
        vue.artListdata = data.data.pageFirstListData
      })
    },
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
  .first-page-list li {color:#aaa;}
	.first-page-list li .head{color:#9a9a9a;font-weight: bold;}
	.first-page-list .item-left{float: left;display: inline-block;width: 80%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin:0 0 0 3px;}
	.first-page-list .item-right{}
</style>
