<template>
  <div class="app-content">
    <headerCard></headerCard>
    <section class="content-section">
       <router-view></router-view>
    </section>
  </div>
</template>
<script>
require('../css/base.css')
require('../css/main.css')
import headerCard from './common/headerCard'
export default {
  name: 'App',
  created () {
    let vue = this
    setTimeout(function () {
      vue.actTitle()
    }, 300)
  },
  components: {
    headerCard
  },
  methods: {
    actTitle () {
      let titleData = this.$store.state.titleData
      let len = parseInt(Math.random() * titleData.length) > 0 ? parseInt(Math.random() * titleData.length) : 0
      let actTitle = titleData[len]
      document.title = actTitle
    }
  }
}
</script>

