<template>
  <section class="pageDetail">
    <artDetailCard 
      v-if="queryData.type == 1 || queryData.type == 3"
      :artDetailData="artDetailData">
    </artDetailCard>
    <picDetailCard 
      v-if="queryData.type == 2 " 
      :picDetailData="picDetailData">
    </picDetailCard>  
  </section>
</template>
<script>
import api from '../../api/index.js'
// 组件
import picDetailCard from '../common/picDetailCard'
import artDetailCard from '../common/artDetailCard'

export default {
  name: 'pageDetail',
  components: {
    picDetailCard,
    artDetailCard
  },
  mounted () {
    this.getPicDetailData()
    this.getArtDetailData()
  },
  data () {
    return {
      queryData: {},
      picDetailData: {},
      artDetailData: {}
    }
  },
  methods: {
    getPicDetailData () {
      let vue = this
      api.getPicDetailData().then(function (data) {
        vue.updateData(data.data.picDetailData)
      })
    },
    updateData (data) {
      let vue = this
      vue.queryData = vue.$route.query
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === vue.queryData.id) {
          if (Number(vue.queryData.type) === 2) {
            vue.picDetailData = data[i]
          } else {
            vue.artDetailData = data[i]
          }
        }
      };
    },
    getArtDetailData () {
      let vue = this
      api.getArtDetailData().then(function (data) {
        vue.updateData(data.data.artDetailData)
      })
    }
  }
}
</script>
