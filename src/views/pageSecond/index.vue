<template>
  	<picCard :picCardData="picCardData"></picCard>
</template>
<script>
import api from '../../api/index.js'
// 组件
import picCard from '../common/picCard'
export default {
  name: 'pageSecond',
  components: {
    picCard
  },
  data () {
    return {
      picCardData: []
    }
  },
  mounted () {
    this.getListData()
  },
  methods: {
    getListData () {
      let vue = this
      api.getListData().then(function (data) {
        vue.picCardData = data.data.pageSecondListData
        for (var i = 0; i < vue.picCardData.length; i++) {
          vue.picCardData[i]['excerpt'] = vue.picCardData[i]['excerpt'].slice(0, 50) + '.....'
        };
      })
    }
  }
}
</script>
