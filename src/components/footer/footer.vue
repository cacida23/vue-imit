<template>
    <footer class="app-tab">
      <ul>
        <li><router-link to="/home">
          <div class="icon homeIcon"></div>
          <span>首页</span></router-link></li>
        <li><router-link to="/all"><div class="icon allIcon"></div>
          <span>全部</span></router-link></li>
        <li><router-link to="/stroll"><div class="icon strollIcon"></div>
          <span>闲逛</span></router-link></li>
        <li><router-link to="/cart"><div class="icon cartIcon"></div>
          <span>购物车</span></router-link></li>
        <li><router-link to="/user"><div class="icon userIcon"></div>
          <span>客户中心</span></router-link></li>
      </ul>
    </footer>
</template>

<script>
  export default {

  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .app-tab
    position fixed
    height 4rem
    bottom 0
    left 0
    right 0
    padding-bottom 1rem
    background #f1f1f1
    ul
      li
        float: left
        width 20%
        a
          display block
          color  #666
          width 100%
          text-align center
          .icon
            height 3.3rem
          .homeIcon
            background url("./home2.png") no-repeat center
            background-size 2rem
          .allIcon
            background url("./Category (3).png") no-repeat center
            background-size 2rem
          .strollIcon
            background url("./shoes (1).png") no-repeat center
            background-size 2rem
          .cartIcon
            background url("./foodicon4.png") no-repeat center
            background-size 2rem
          .userIcon
            background url("./account.png") no-repeat center
            background-size 2rem
          &.active
            color #009a42
            .homeIcon
              background-image url("./home.png")
            .allIcon
              background-image url("./Category (4).png")
            .strollIcon
              background-image url("./shoes.png")
            .cartIcon
              background-image url("./cart.png")
            .userIcon
              background-image url("./account (1).png")
</style>
