<template>
  <section class="art-detail-box">
    <h2 class="head">{{artDetailData.head}}</h2>
    <p class="title">
    	<span class="date" :title="artDetailData.date">添加时间:{{artDetailData.date}}</span>
    </p>
  	<div class="content">
      <div v-html="artDetailData.content"></div>
  	</div>
  </section>
</template>
<script>
export default {
  props: ['artDetailData']
}
</script>
<style type="text/css">
  .art-detail-box .head{text-align: center;font-size: 20px;}
  .art-detail-box .title .date{display: inline-block;background: rgba(0, 0, 0, .7);color:#fff;font-size: 12px;padding:1px 10px;border-radius: 3px;}
  .art-detail-box .content{padding: 20px 0 0 0; width: 50%;margin: 0 auto;}
  .art-detail-box .content p {margin:0 0 15px 0;}
</style>
</style>
