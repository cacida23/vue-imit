<template>
  <div class="index">
      <home-header :showRight="showRight"></home-header>

      <div class="content-wrap" ref="wrap">
        <scroller
          :on-refresh="refresh"
          :on-infinite="infinite"
          :no-dataText="nodata"
          refreshLayerColor="#900"
          snappingHeight="100"
          minContentHeight="200"
          ref="scroller"
          refreshText="">
          <!-- content goes here -->
        <div class="scroller-wrap">
          <div class="zz">下拉刷新</div>
          <home-swiper :swiperHeight="250"></home-swiper>
          <div data-v-60df7298="" class="item-combo">
            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div>
              <div data-v-46782024="" class="img-wrap" style="height: 86px;">
                <img data-v-46782024="" usemap="#planetmap0" src="./banner1.jpg" lazy="loaded" style="width: 100%; height: 86px;">
                <map data-v-46782024="" name="planetmap0" id="planetmap0" >
                  <area data-v-46782024="" shape="rect" coords="0,9,118,84" href="/#/news">
                  <area data-v-46782024="" shape="rect" coords="118,8,241,86" href="/#/news">
                  <area data-v-46782024="" shape="rect" coords="241,8,360,85" href="/#/news">
                </map>
              </div>
            </div>
          </div>
          <div data-v-60df7298="" class="item-combo">
            <div title="组合图活动">
              <div class="combo-title"></div>
              <div data-v-46782024="" class="img-wrap" style="height: 144px;">
                <img data-v-46782024="" usemap="#planetmap1" src="./banner2.jpg" lazy="loaded"
                     style="width: 100%; height: 144px;">
                <map data-v-46782024="" name="planetmap1" id="planetmap1">
                  <area data-v-46782024="" shape="rect" coords="0,1,360,142">
                </map>
              </div>
            </div>
          </div>
          <div data-v-60df7298="" class="item-combo">
            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div>
              <div data-v-46782024="" class="img-wrap" style="height: 888px;"><img data-v-46782024="" usemap="#planetmap2"
                                                                                   src="http://i.lifevccdn.com/upload/combinationchart/c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg"
                                                                                   lazy="loaded"
                                                                                   style="width: 100%; height: 888px;">
                <map data-v-46782024="" name="planetmap2" id="planetmap2">
                  <area data-v-46782024="" shape="rect" coords="0,62,360,222">
                  <area data-v-46782024="" shape="rect" coords="0,230,360,390">
                  <area data-v-46782024="" shape="rect" coords="0,390,360,550">
                  <area data-v-46782024="" shape="rect" coords="0,550,118,719">
                  <area data-v-46782024="" shape="rect" coords="118,550,241,719">
                  <area data-v-46782024="" shape="rect" coords="241,550,360,719">
                  <area data-v-46782024="" shape="rect" coords="0,719,118,888">
                  <area data-v-46782024="" shape="rect" coords="118,719,241,888">
                  <area data-v-46782024="" shape="rect" coords="241,719,360,888">
                </map>
              </div>
            </div>
          </div>
          <div data-v-60df7298="" class="item-combo">
            <div title="组合图活动">
              <div class="combo-title"></div>
              <div data-v-46782024="" class="img-wrap" style="height: 144px;">
                <img data-v-46782024="" usemap="#planetmap1" src="./banner2.jpg" lazy="loaded"
                     style="width: 100%; height: 144px;">
                <map data-v-46782024="" name="planetmap1" id="planetmap1">
                  <area data-v-46782024="" shape="rect" coords="0,1,360,142">
                </map>
              </div>
            </div>
          </div>
        </div>
        </scroller>
      </div>

    <!--侧边移入页-->
    <transition name="fromright">
      <div class="fromRight" v-show="isInner" >
        <div class="header_green">
          <lable @click="showRight">back</lable>
          账户中心
        </div>
      </div>
    </transition>

  </div>

</template>

<script>
  import homeHeader from '../../header/home-header.vue'
  import homeSwiper from '../../swiper/home-swiper.vue'

  export default {
     data () {
         return {
           isInner: false
         }
     } ,
    components:{
      'home-header': homeHeader,
      'home-swiper': homeSwiper
    },
    created (){
      console.log(123)
    },
    methods:{

        refresh () {
          console.log('ok')
          this.$refs.scroller.finishPullToRefresh()
        },
        infinite () {
          console.log('okto')
        },
        nodata () {
            alert('没有数据')
        },
        showRight (){
          this.isInner = !this.isInner
        }
      }

  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .scroller-wrap
     margin-top -92rem
     padding-top 100rem
     box-sizing border-box
     .zz
        width 100%
        height 30rem
        box-sizing border-box
        padding-top 26rem
        position absolute
        top -16rem
        left 0
        right 0
        background #eee
        text-align center
        color #666
     .item-combo
        .img-wrap
          margin-top 0.5rem
  .fromright-enter-active {
    transition: all .3s ease;
  }
  .fromright-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fromright-enter, .fromright-leave-to
  {
    transform: translateX(100%);
    opacity: 0;
  }
    .fromRight
      position absolute
      top 0
      right 0
      left 0
      bottom 0
      z-index 999
      background #fff
      .header_green
        position fixed
        background-color #89be48
        width 100%
        height 48px
        text-align center
        line-height 48px
        z-index 999
        font-size 20px
        color #fff
        lable
          float: left
</style>
