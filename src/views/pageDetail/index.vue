<template>
  <section class="pageDetail">
    <div v-if="queryData.type == 1">
      第一种
    </div>
    <picDetailCard 
      v-if="queryData.type == 2" 
      :picDetailData="picDetailData">
    </picDetailCard>  
  </section>
</template>
<script>
import api from '../../api/index.js'
// 组件
import picDetailCard from '../common/picDetailCard'

export default {
  name: 'pageDetail',
  components: {
    picDetailCard
  },
  mounted () {
    this.getPicDetailData()
  },
  data () {
    return {
      queryData: {},
      picDetailData: {}
    }
  },
  methods: {
    getPicDetailData () {
      let vue = this
      vue.queryData = vue.$route.query
      api.getPicDetailData().then(function (data) {
        vue.updateData(data.data.picDetailData)
      })
    },
    updateData (data) {
      let vue = this
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === vue.queryData.id) {
          vue.picDetailData = data[i]
        }
      };
    }
  }
}
</script>
