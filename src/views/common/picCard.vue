<template>
<section class="picBox">
		<div class="pic-item" v-for="item in picCardData"  @click="goDetail(item)">
      <div class="show-box">
        <img class="item-img" :src="item.picUrl" alt="">
      </div>
      <h2 class="item-title clearfix">{{item.title}} <span class="item-date">{{item.date}}</span></h2>
      <p class="item-excerpt">
        {{item.excerpt}}
      </p>
    </div>
</section>
</template>
<script>
export default {
  props: ['picCardData'],
  methods: {
    goDetail (data) {
      this.$router.push({
        path: 'pageDetail',
        query: {
          id: data.id,
          type: data.type
        }
      })
    }
  }
}
</script>
<style type="text/css">
  .pic-item{display:  inline-block; margin:0 1% 30px 0;min-width: 200px;width: 32%;max-width: 400px;}
  .pic-item:nth-child(3n){margin-right: 0;}
  .pic-item .show-box{width: 400px; height: 230px;overflow: hidden;}
  .pic-item .show-box:hover .item-img {transform: scale(1.1);-webkit-filter: brightness(60%);}
  .pic-item .item-img{border-radius: 3px;-webkit-backface-visibility: hidden;transition: 0.6s all ease;z-index: 0; }
  .pic-item .item-title{overflow: hidden;text-overflow: ellipsis;font-size: 18px;margin: 10px 0;font-weight: bold;}
  .pic-item .item-title .item-date{float: right; display: inline-block;color:#fff; background: rgba(0, 11, 14, 0.65);height: 16px;line-height: 17px; padding: 0 10px;border-radius: 16px;font-size: 12px;}
  .pic-item .item-excerpt{font-size: 14px;}
  @media screen and (max-width: 767px){
    .pic-item { width: 48%;}
    .pic-item:nth-child(2n){margin-right: 0;}
    .pic-item:nth-child(3n){margin-right: 1%;}
  }
   @media screen and (max-width: 450px){
    .pic-item {
        width: 100%;
    }
  }  
</style>
