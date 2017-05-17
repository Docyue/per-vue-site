<template>
	<div>
	   <section class="main-box">
	       <h2 class="main-header">好文列表</h2>
	        <div class="main-detail">
	        	<topListCard :topListData="topListData"></topListCard>
	        </div>
	    </section>
	    <section class="main-box">
	       <h2 class="main-header">网站介绍</h2>
	        <div class="main-detail">
	          <p>此站点为个人网站，网站初建于2014年，主要记录博主日常生活，学习，旅行等相关内容！</p>
	          <timeLineCard :timeLineData="timeLineData"></timeLineCard>
	        </div>
	    </section>
	    <section class="main-box">
	       <h2 class="main-header">个人介绍</h2>
	        <div class="main-detail">
	          <selfInfoCard :infoData="infoData"></selfInfoCard>
	        </div>
	    </section>
	</div>
</template>
<script>
import api from '../api/index.js'
// 组件
import topListCard from './common/topListCard'
import timeLineCard from '../components/common/timeLineCard'
import selfInfoCard from '../components/common/selfInfoCard'

export default {
  name: 'home',
  components: {
    timeLineCard,
    selfInfoCard,
    topListCard
  },
  data () {
    return {
      topListData: [],
      timeLineData: [],
      infoData: []
    }
  },
  mounted () {
    this.getBaseData()
  },
  methods: {
    getBaseData () {
      let vue = this
      api.getBaseData().then(function (data) {
        vue.topListData = data.data.topListData
        vue.timeLineData = data.data.lineData
        vue.infoData = data.data.infoData
      })
    }
  }
}
</script>
