<template>
  <div class="index">
    <home-header></home-header>
    <div class="content-wrap">
      <div class="subcat-title">最近一周新品</div>
      <good-card></good-card>
      <good-card></good-card>
      <good-card></good-card>
      <good-card></good-card>
      <good-card></good-card>
    </div>
  </div>

</template>

<script>
  import homeHeader from '../../header/home-header.vue'
  import homeSwiper from '../../swiper/home-swiper.vue'
  import goodCard from  '../../goodCard/goodCard.vue'
  export default {
    components:{
      'home-header': homeHeader,
      'home-swiper': homeSwiper,
      'good-card': goodCard
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .content-wrap
    margin-top 8rem
    background #eee
    padding 0.6rem
    .subcat-title
      max-width: 96%;
      text-align: center;
      font-size: 1.9em;
      color: #000;
      line-height: 2em;
      margin: 0 auto -1.2em;
</style>
