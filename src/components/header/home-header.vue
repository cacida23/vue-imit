<template>
  <div class="wrap-header">
    <div class="header-content">
      <a href="#/all">
        <span class="head-typeimg"></span></a>
    </div>
    <div class="wrap-menuNavNewProduct">
      <div class="homeTab"  ref="homeTab" id="homeTab">
        <ul ref="tab" class="homeUl" >
            <!-- slides -->
            <li><router-link to="/home/index">首页</router-link></li>
            <li><router-link to="/home/news">新品</router-link></li>
            <li><router-link to="/home/channel/2860">家用</router-link></li>
            <li><router-link to="/home/channel/2859">厨具</router-link></li>
            <li><router-link to="/home/channel/2860">家用</router-link></li>
            <li><router-link to="/home/channel/2859">厨具</router-link></li>
            <li><label class="showRight" @click="showRight">公司介绍</label></li>


        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        lislength: 0
      }
    },
    props:{
      showRight:{
          type:Function,
          required: false
      }
    },
    mounted () {
      this.lislength = this.$refs.tab.children.length
      this.$nextTick(()=>{
        this._tabWidth ()
      })
    },
    methods: {
        // 让ul宽度等于li的总和
      _tabWidth () {
        let tabWidth = 80*this.lislength
        this.$refs.tab.style.width = `${tabWidth}px`
      },
      // 动态增加 tab容器的长度，使他一直可以显示

    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .wrap-header
    position fixed
    top 0
    width 100%
    height 8rem
    z-index 99
    background #89be48
    .header-content
      display: block;
      width: 100%;
      height: 4rem;
      background: url('./header.png') no-repeat;
      background-size: 50%;
      background-position: 50%;
      a
        display inline-block
        span
          width: 3.666666rem;
          height: 3.666666rem;
          display: block;
          float: right;
          position: absolute;
          z-index: 1000;
          top: 0;
          right: 0;
          background-size: 45%;
          background-image: url('./allheader.png')
          background-repeat no-repeat
          background-position: 50%;
    .wrap-menuNavNewProduct
      position: relative;
      width 100%
      z-index: 1100;
      background: #fff;
      .homeTab
        margin: 0 auto;
        position: relative;
        min-width: 100%
        height: 4rem;
        overflow: hidden;
        overflow-x: scroll;
        &::-webkit-scrollbar {display:none}
        .homeUl
          height 4rem
          position: relative;
          overflow: hidden;
          line-height: 4rem;
          float: left;
          box-sizing: border-box
          li
            height 4rem
            float: left
            width 80px
            text-align center
            box-sizing: border-box
            border-bottom: 2px solid #ddd
            .showRight,a
              background: transparent;
              height: 3.8rem;
              display: block;
              line-height: 3.8rem;
              padding: 0;
              position: relative;
              font-size: 1.5rem;
              font-family 'Microsoft YaHei'
              color: #333
              &.active
                color: #009c42
                border-bottom: 2px solid #009c42

</style>
