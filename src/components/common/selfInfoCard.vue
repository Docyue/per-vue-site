<template>
		<ul class="info-list">
      <li v-for="item in getInfoData" class="clearfix">
        <span class="title">{{item.title}}</span>
        <i class="line"></i>
        <span class="content" v-if="!item.actType">
          {{item.content}}
        </span>
        <span v-else class="content">
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
      return this.infoData
    }
  }
}
</script>
<style type="text/css">
.info-list{margin:0 0 0 -1em;}
  .info-list li {margin:0 0 12px 0;}
  .info-list li .title{width:80px;display: inline-block;text-align: right;float: left;color:#999;padding: 0 6px 0 0;margin: 0 12px 0 0; border-right: 1px dotted #e0e0e0;}
  .info-list li .content{display: inline-block;float: left;width: calc(100% - 120px)}
</style>
