<template>
	<div>
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
  components: {
    headerCard
  }
}
</script>

