<template>
  <section class="pic-detail-box">
    <h2 class="head">{{picDetailData.head}}</h2>
    <p class="title">
    	<span class="date" :title="picDetailData.date">出游时间:{{picDetailData.date}}</span>
    </p>
  	<div class="content">
  		<div class="card" v-for="item in picDetailData.content">
  			<p class="pic-decription" v-html="item.description"></p>
        <img :src="subItem"  v-for="subItem in item.pic" v-if="item.pic.length > 0">
  		</div>
  	</div>
  </section>
</template>
<script>
export default {
  props: ['picDetailData']
}
</script>
<style type="text/css">
  .pic-detail-box .head{text-align: center;font-size: 20px;}
  .pic-detail-box .title .date{display: inline-block;background: rgba(0, 0, 0, .7);color:#fff;font-size: 12px;padding:1px 10px;border-radius: 3px;}
  .pic-detail-box .content{padding: 20px 0 0 0; width: 50%;margin: 0 auto;}
  .pic-detail-box .content img {display: block;margin: 0 auto 10px auto;}
  .pic-detail-box .pic-decription {margin: 0 0 15px 0;}
</style>
</style>
