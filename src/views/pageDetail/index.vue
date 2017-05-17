<template>
  <section class="pageDetail">
    <div v-if="queryData.type == 1">
      第一种
    </div>
    <div v-if="queryData.type == 2">
      第二种
    </div>  
  </section>
</template>
<script>
export default {
  name: 'pageDetail',
  mounted () {
    this.getDetailData()
  },
  data () {
    return {
      queryData: {}
    }
  },
  methods: {
    getDetailData () {
      this.queryData = this.$route.query
      console.log(this.queryData)
    }
  }
}
</script>
