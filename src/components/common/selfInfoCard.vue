<template>
		<ul class="info-list">
      <li v-for="item in getInfoData">
        <span class="title">{{item.title}}：</span>
        <i class="line"></i>
        <span class="content" v-if="!item.actType">
          {{item.content}}
        </span>
        <span v-else>
          <p v-for="subItem in item.content"> {{subItem.subTitle}}：{{subItem.subContent}}</p>
        </span>
      </li>
		</ul>
</template>
<script>
export default {
  props: ['infoData'],
  computed: {
    getInfoData () {
      for (var i = 0; i < this.infoData.length; i++) {
        if (this.infoData[i].content instanceof (Array)) {
          this.infoData[i].actType = true
        } else {
          this.infoData[i].actType = false
        }
      };
      console.log(this.infoData)
      return this.infoData
    }
  }
}
</script>
<style type="text/css">
  .time-line li{position: relative;height: 100px;color: #ccc;}
</style>
