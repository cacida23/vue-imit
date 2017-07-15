<template>
  <div class="channel">
    <home-header ref="header" ></home-header>
    <div class="content-wrap"   v-if="isrefre" >
      <ul id="channelUl" class="clearbox">
        <li v-for="Categorie in channelData.Categories">
          <router-link :to="`/channelsub/${channelData.ItemIndexId}/${Categorie.ItemIndexId}`" >
            <img :src="`http://i.lifevccdn.com${Categorie.CategoryImageUrl.slice(0,-4)}_d1242x0.jpg`" alt="">
             <dl >{{Categorie.Title}}</dl>
           </router-link>
        </li>

      </ul>
      <div id="category-banner" class="category-banner">
        <img src="http://i.lifevccdn.com/upload/DesignerMessageImg/9203af2fbef145daa142dd97bb84fae3.jpg"
             class="item-pic">
      </div>
      <div class="content-wrap-in" >
        <div id="ceoRecommend" class="wrap-shelf">
          <div class="subcat-title" v-if="ceoData.CEORecommendTitle">{{ceoData.CEORecommendTitle.Text}}</div>
          <good-card v-for="(CEORecommend,index) in ceoData.CEORecommends" :key="index" :good="CEORecommend"></good-card>
        </div>
        <div class="wrap_shelf_nav clearbox">
          <div class="wrap_shelf_nav_sort clearbox" ref="nav">
            <ul class="life-sort has-filter clearbox">
              <li data-v-6c0a93da="" data-v-20f7755b="">
                <a data-v-6c0a93da="" data-v-20f7755b="" class="">新品</a></li>
              <li data-v-6c0a93da="" data-v-20f7755b=""><a data-v-6c0a93da="" data-v-20f7755b="" class="">畅销</a></li>
              <li data-v-6c0a93da="" data-v-20f7755b=""><a data-v-6c0a93da="" data-v-20f7755b="" class="">
                <em data-v-6c0a93da="" data-v-20f7755b="">价格</em> <i data-v-6c0a93da="" data-v-20f7755b="" class=""></i></a>
              </li>
              <li data-v-6c0a93da="" data-v-20f7755b=""><a data-v-6c0a93da="" data-v-20f7755b="" class=""><em
                data-v-6c0a93da="" data-v-20f7755b="">需求筛选</em> <span data-v-6c0a93da="" data-v-20f7755b=""
                                                                      class="filter"></span></a></li>
            </ul>
          </div>
        </div>
        <div class="wrap_shelf_centent">
          <good-card></good-card>
          <good-card></good-card>
          <good-card></good-card>
          <good-card></good-card>
          <good-card></good-card>
          <good-card></good-card>
        </div>
      </div>

      <br><br><br><br><br><br>
  </div>
  </div>
</template>

<script>
  import homeHeader from '../../header/home-header.vue'
  import homeSwiper from '../../swiper/home-swiper.vue'
  import goodCard from  '../../goodCard/goodCard.vue'
  import axios from 'axios'
  import $ from 'jquery'
  export default {
      data(){
        return {
          channelData:{},
          ceoData:{},
          isrefre:true

        }
      },
    created(){
        this._getChannelDate()
      },
    mounted (){
      this._fixNav()
    },
    updated(){
    },
    components:{
      'home-header': homeHeader,
      'home-swiper': homeSwiper,
      'good-card': goodCard
    },
    methods:{
      //当缓存中有某个key时直接赋值，否者发请求，获取数据，存到缓存，改变状态
      //发送axios初始化数据
      _getChannelDate(){
        let routerID = this.$route.params.id
        // 改变ceo状态
        if(this._haskey(`CEO_KEY${routerID}`)&&JSON.parse(localStorage.getItem(`CEO_KEY${routerID}`))!=[]){
        }else {
          axios.get(`/api/ceo/${routerID}`)
            .then(response=>{
              if (response.data.code==1){
                this.ceoData = response.data.Data
              }
            })
          localStorage.setItem(`CEO_KEY${routerID}`,JSON.stringify(this.ceoData))
        }
        //改变分类状态
        if(this._haskey(`CHANNEL_KEY${routerID}`)&&JSON.parse(localStorage.getItem(`CHANNEL_KEY${routerID}`))!=[]){
          this.channelData = JSON.parse(localStorage.getItem(`CHANNEL_KEY${routerID}`))
        }else {
          axios.get(`/api/channels?id=${routerID}`)
            .then(response=>{
              if (response.data.code==1){
                  this.channelData = response.data.Data
              }
            })
          localStorage.setItem(`CHANNEL_KEY${routerID}`,JSON.stringify(this.channelData))
        }
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
    watch: {
        $route:{
            deep:true,
            handler: function (val) {
              console.log(this.channelData)
              //这里路由路径的所有变化都会触发此watch
              //这要此组建对象被创建，就会执行这个见识，而每个组件的this,$route都指向一个对象
              //所以从此组件跳向其它组件也会执行这个监视
              //如果跳转到目标页面才会触发某个逻辑
               if (val.path.indexOf('chan')>0&&val.path.indexOf('sub')<0){
                  console.log('in')
                 this.isrefre = false
                 this._getChannelDate()
                 setTimeout(()=>{
                   this.isrefre = true
                   console.log(this.isrefre,'isrefre')
                 },100)
               }
            }
        }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .content-wrap
      margin-top 8rem
      padding 0
      background #eee
      #channelUl
        background #fff
        width 100%
        li
          text-align center
          float left
          width 25%
          margin 1rem auto
          a
            display inline-block
            img
              width 75px
              text-align center
              vertical-align middle
            dl
              text-align center
      #category-banner
        width 100%
        margin-top 2rem
        img
          width 100%
          vertical-align top
      .content-wrap-in
        padding 0 0.6rem
        #ceoRecommend
          margin: -4rem auto 2rem;
          padding: 4rem 0 0;
          .subcat-title
            max-width: 96%;
            text-align: center;
            font-size: 1.9em;
            color: #000;
            line-height: 2.5em;
            margin: 0 auto -1.2em;
        .wrap_shelf_nav
          width: 100%;
          z-index: 10;
          height: 3rem;
          .wrap_shelf_nav_sort
            width: 100%;
            z-index: 105;
            padding-bottom 0 0.6rem
            ul
              padding: .4rem;
              background: #fff;
              border-bottom: 1px solid #f2f2f2;
              li
                float: left
                width 25%
                height: 3rem;
                line-height: 3rem;
                a
                  display: block;
                  position: relative;
                  height: 1.4rem;
                  line-height: 1.4rem;
                  border-right: 1px solid #f2f2f2;
                  text-align: center;
                  margin-top: .8rem;
                  font-size: 1.35rem;
                  color: #666;
            .lifefix
              position fixed
              top 8rem
              left 0
              width 100%
              box-sizing border-box
        .wrap_shelf_centent
          width 100%
          padding-top 4rem
          margin-top -4rem
</style>
