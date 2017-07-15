<template>
  <div class="channelsub">
    <header>
      <div class="header-content">
        <router-link to="/all">
          <span class="back-btn"></span>
        </router-link>
        <p v-if="good">{{good.type}}</p>
        <!--<p>{{typaName}}</p>-->
      </div>
    </header>
    <div class="category">
      <p>新品</p>
      <p class="selling">畅销</p>
      <p>价格</p>
    </div>
    <good :item="good" :all="false"></good>
  </div>
</template>

<script>
  import good from '../detailgood/good.vue'
  import axios from 'axios'
  const OK = 0
  export default {
    data () {
      return {
        good:''
      }
    },
    created () {
      axios.get('/goods')
        .then(response => {
          const result = response.data
          if(result.code === OK) {
            this.allGoods = result.data
            const id = this.$route.params.id.split('_')[0]
            const good = this.allGoods.find(good => {
              return good.id == id
            })
            this.good = good
          }
        })
    },
    computed: {
      /*typeName () {
        const id = this.$route.params.id.split('_')[0]
        const good = this.allGoods.find(good => {
          return good.id == id
        })
        console.log(good.type)
        return good.type
      }*/
    },
    components: {
      good
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .channelsub
    width 100%
    padding-bottom 40px
    header
      padding 0
      width 100%
      height 50px
      line-height 50px
      text-align center
      font-size 20px
      color white
      background #89be48
      position fixed
      top 0
      z-index 999
      .header-content
        position relative
        .back-btn
          background url('./back.png') no-repeat
          -webkit-background-size 16px 21px
          background-size 16px 21px
          position absolute
          display block
          width 16px
          height 21px
          left 5px
          top 16px

    .category
      margin-top 50px
      width 100%
      height 40px
      line-height 40px
      color #333
      p
        float left
        width 33%
        color #333
        font-size 14px
        text-align center
      .selling:before, .selling:after
        content ''
        height 20px
        width 1px
        margin-top 10px
        background-color: #ddd
      .selling:before
        float left
      .selling:after
        float right
</style>
