<template>
		<ul class="time-line">
      <li v-for="item in timeLineData">
        <span class="time">{{item.time}}</span>
        <i class="line"></i>
        <span class="action">
          {{item.action}}
        </span>
      </li>
		</ul>
</template>
<script>
export default {
  props: ['timeLineData']
}
</script>
<style type="text/css">
  .time-line li{position: relative;height: 100px;}
  .time-line li .line{position: absolute;top: 55px;left: 28px; height: 55px;width: 1px;background: lightgray;}
	.time-line li:last-child .line{width: 0;}
	.time-line li .time{display: inline-block;width: 55px;height: 55px;background: lightcoral; border-radius: 30px;text-align: center;color: #fefefe;line-height: 55px;font-size: 18px;}
	.time-line li .action{position: absolute;left: 60px;top:18px;}
</style>
