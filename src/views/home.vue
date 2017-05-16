<template>
	<div>
	   <section class="main-box">
	       <h2 class="main-header">好文列表</h2>
	        <div class="main-detail">
	        	<artListCard :artListData="artListData"></artListCard>
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
import artListCard from './common/artListCard'
import timeLineCard from '../components/common/timeLineCard'
import selfInfoCard from '../components/common/selfInfoCard'

export default {
  name: 'home',
  components: {
    timeLineCard,
    selfInfoCard,
    artListCard
  },
  data () {
    return {
      artListData: [],
      timeLineData: [],
      infoData: []
    }
  },
  mounted () {
    this.getTimeLine()
  },
  methods: {
    getTimeLine () {
      let vue = this
      api.getTimeLineData().then(function (data) {
        vue.artListData = data.data.artListData
        vue.timeLineData = data.data.lineData
        vue.infoData = data.data.infoData
        console.log(data)
      })
    }
  }
}
</script>
