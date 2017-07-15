<template>
  <div class="home">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    <my-footer></my-footer>
  </div>

</template>

<script>
  import homeHeader from '../header/home-header.vue'
  import homeSwiper from '../swiper/home-swiper.vue'
  import myfooter from '../footer/footer.vue'
  export default {
      methods:{
        refresh () {
            console.log('ok')
        },
        infinite () {
            console.log('okto')
        }
      },
      components:{
       'home-header': homeHeader,
        'home-swiper': homeSwiper,
        'my-footer': myfooter
      }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>

