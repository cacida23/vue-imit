<template>
    <footer class="item-footer" >
      <div class="f-service f-kefu">
        <i class="ico ico-cusser"></i>
        <span >客服</span>
      </div> <!---->
      <router-link to="/#" class="f-service f-home">
         <i class="ico ico-home"></i>
         <span >首页</span>
       </router-link>
      <router-link to="/cart" class="f-service f-cart">
        <i  class="ico ico-cart-green"></i>
        <span  class="cart-num">19</span>
      </router-link>
      <button  class="f-btn-add">加入购物车</button>
</footer>
</template>

<script>
  export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .item-footer
    background-color #f9f9f9
    position fixed
    bottom 0
    left 0
    width 100%
    padding: 4px 0;
    z-index: 1001;
    height: 4rem;
    border-top: 1px solid #ddd;
    .f-service
      width: 13%;
      height: 4rem;
      overflow: hidden;
      float: left;
      line-height: 0.5rem;
      font-size: 1.1rem;
      text-align: center;
      i
        margin-bottom: 0.1rem;
        width: 100%;
        height: 3rem;
        display: inline-block;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 35%;
    .f-kefu
      i
        background-image url("./kf.png")
    .f-home
      i
        background-image url("./home.png")
    .f-cart
      border 1px #009a42 solid
      margin-top 0.5rem
      margin-left 1rem
      height 3rem
      width 6rem
      text-align left
      line-height 3rem
      border-radius 3px
      display inline-block
      font-size 12px
      position relative
      i
        display inline-block
        width 60%
        background-image: url("./cart.png")
        background-size: 2rem
      .cart-num
        top:50%
        margin-top -0.9rem
        width: 1.8rem;
        height: 1.8rem;
        display: block;
        background-color: #f60;
        border-radius: 50%;
        text-align: center;
        font-size: .75rem;
        color: #fff;
        line-height: 1.8rem;
        position: absolute;
        right: 13%;
    .f-btn-add
      width: 45%;
      height: 4rem;
      overflow: hidden;
      float: right;
      background-color: #009d42;
      border: 0;
      text-align: center;
      font-size: 1.7rem;
      color: #fff;
      line-height: 100%;
      margin-right: 1rem;
      padding: 0;
      border-radius: .5rem;

</style>
