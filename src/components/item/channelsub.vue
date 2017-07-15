<template>
  <div class="channelsub">
    <header>
      <div class="herder-text">
        <p>商品详情</p>
      </div>
    </header>
    <div class="contetn-wrap">
      <swiper :swiperHeight="375"></swiper>
      <div class="item-price">
        <div data-v-3520427c="" class="title">铝合金门后挂钩</div>
        <p data-v-3520427c="" class="des">藏在门后的收纳空间</p>
        <div data-v-346b1dbf="" data-v-3520427c="" class="price-cntr clearbox" style="text-align: center;"><em data-v-346b1dbf="" class="icon-money-larger normal-price-color yi">¥</em> <em data-v-346b1dbf="" class="price-money-larger normal-price-color er">35</em>
          <img data-v-346b1dbf="" src="./xin.png" class="ic-newtag">
        </div>
        <div data-v-d3ac9140="" data-v-3520427c="" id="promoWrap">
          <div data-v-d3ac9140="" class="promo-item">
            <div data-v-d3ac9140="">
              <span data-v-d3ac9140="" class="tag-promo bgred">优惠</span>
              <span data-v-d3ac9140="" class="m-txt red">登录查看你的积分和优惠券</span>
            </div>
          </div>
        </div>
      </div>
      <dl class="select">
        <dt class="ggdt">规格:</dt>
        <dd class="ggdd">分隔式 <i></i></dd>
      </dl>
      <div class="addNum">
        <span class="title">数量</span>
        <span class="des">
          <button>-</button>
          <span>{{}}</span>
          <button>+</button>
        </span>
      </div>
    </div>
    <footCart></footCart>
    <br><br><br><br><br><br><br><br><br><br>
</div>
</template>

<script>
  import swiper from '../swiper/home-swiper.vue'
  import footCart from '../foot-cart/footer-cart.vue'
  import axios from 'axios'
  export default {
    data(){
      return {
        fristPath:this.$route.path.slice(-9,-5),
        lastPath:this.$route.path.slice(-4),
        channelsub:{},
        channelData:{}
      }
    },
    created(){
      this._getChannelDate()
      setTimeout(()=>{
        console.log(this.channelsub)
      },1000)
    },


    methods:{
      //当缓存中有某个key时直接赋值，否者发请求，获取数据，存到缓存，改变状态
      //发送axios初始化数据
      // channelsub不是channel的子组件，而是路由过来的，可以用路由路径传递信息
      _getChannelDate(){
        // 此时的请求参数就就是第一段子串
        let routerID = this.fristPath
        console.log(routerID)
        //改变分类状态
        if(this._haskey(`CHANNEL_KEY${routerID}`)&&JSON.parse(localStorage.getItem(`CHANNEL_KEY${routerID}`))!=[]){
          this.channelData = JSON.parse(localStorage.getItem(`CHANNEL_KEY${routerID}`))
          this.channelsub=this.channelData.Categories.find((Categorie)=>{
            return Categorie.ItemIndexId==this.lastPath
          })
        }else {
          axios.get(`/api/channels?id=${routerID}`)
            .then(response=>{
              if (response.data.code==1){
                this.channelData = response.data.Data
                this.channelsub=this.channelData.Categories.find((Categorie)=>{
                  return Categorie.ItemIndexId==this.lastPath
                })
              }
            })
          localStorage.setItem(`CHANNEL_KEY${routerID}`,JSON.stringify(this.channelData))
        }
        //从channelData找到目标数据


          console.log("in")
        },




      // 判断localStorage中是否有某个键名
      _haskey(keyName){
        let target=false
        for(let i=0;i<localStorage;i++){
          if(localStorage===keyName){
            target=true
          }
        }
        return target
      },

      // 固定nav
      _fixNav(){
        //  获取上部元素的高度
        //原生js可以通过getBoundingClientRect获取元素的宽高，和距离视口的距离
        let headerHeight = $(this.$refs.header.$el).height()
        //监听body的滑动事件
        window.addEventListener('scroll', function () {
          if ($('.wrap_shelf_nav_sort')[0].getBoundingClientRect().top<=headerHeight){
            $('.life-sort').addClass('lifefix')
          }else {
            $('.life-sort').removeClass('lifefix')
          }
        })
      }
    },
      components:{
        swiper,
        footCart
      }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  header
    position: fixed;
    top: 0;
    left 0
    right 0
    z-index: 999;
    .herder-text
      padding: 0;
      width: 100%;
      background: #89be48;
      p
        margin: 0 auto;
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
        color: #fff;
        width: 80%;
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
  .contetn-wrap
    margin-top 4rem
    .item-price
      padding 3rem 0 2rem
      .title
        padding: 0;
        text-align: center;
        font-size: 2rem;
        color: #000;
        height: 2;
        line-height: 2rem;
      .des
        text-align: center;
        font-size: 1.5rem;
        color: #999;
        height: 1.5rem;
        line-height: 1.5rem;
        margin-top: .6rem;
      .price-cntr
        font-family: PingFangSC-Regular,Microsoft YaHei,Arial,Verdana,Tahoma,Helvetica,"sans-serif";
        font-size: 0;
        text-align: center;
        height: 2.2rem;
        line-height: 2.2rem;
        margin-top: 1rem;
        em
          font-size 2.2rem
          display inline-block
        img
          width: 1.6rem;
          height: 1.6rem;
          vertical-align: baseline;
          margin-left: .5rem;

      #promoWrap
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: .5rem 0;
        margin-left: 0.7rem;
        .promo-item
          padding: .5rem 0;
          font-size: 14px;
          position: relative;
          width: 100%;
          div
            .bgred
              font-size: 12px;
              height: 1.5rem;
              line-height: 1.5rem;
              display: inline-block;
              padding 0 0.2rem
              color #ffffff
              background-color #900
            .m-txt
              display: inline-block;
              color: #cd060f;
              zoom: .5;
              border: 0;
              padding-left: .7rem;
    .select
      margin-left 0.5rem
      dt
        font-size 1.35rem
        color #666
        font-weight 4000
        margin-bottom 0.5rem
      dd
        display inline-block
        border 1px #ccc solid
        position relative
        padding 0.5rem 0.8rem
        font-size 1.5rem
        &.active
          color #009a42
          background-color #009a42
        &.ggdd
          min-width 30px
          text-align center
          line-height 25px
          i
            display block
            height: 0;
            border-style: solid;
            border-width: 15px 15px 0;
            border-color: transparent #83b842 #83b842 transparent;
            font-size: 0;
            line-height: 0;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 9;


    .addNum
      font-size 1.5rem
      margin-top 1rem
      padding 0.5rem
</style>
