<template>
  <div>
    <div class="header_green">
      账户中心<span>设置</span>
    </div>
    <div class="body_wrapper">
      <div class="loginOrRegister">  <!--登录 或 注册-->
        <div class="not_login">您还未登录</div>
        <div class="big_wrapper">
          <router-link to="/login" class="login">登录</router-link>
          <div class="onepx"></div>
          <router-link to="/register" class="register">注册</router-link>
        </div>
      </div>

      <div class="two_ul">  <!--待支付 两个ul-->
        <ul class="ul_1">
          <li class="ul_1_li">
            <a class="two_a" href="#/login">
              <img src="./ul_1.png" alt="">
              <span>待支付</span>
            </a>
          </li>
          <li class="ul_1_li">
            <router-link to="/login" class="two_a">
              <img src="./ul_2.png" alt="" class="ul_2">
              <span>待发货</span>
            </router-link>
          </li>
          <li class="ul_1_li">
            <a class="two_a" href="#/login">
              <img src="./ul_3.png" alt="">
              <span>待收货</span>
            </a>
          </li>
        </ul>
        <ul class="ul_1">
          <li class="ul_1_li">
            <a class="two_a" href="#/login">
              <img src="./ul_4.png" alt="">
              <span>待评论</span>
            </a>
          </li>
          <li class="ul_1_li">
            <a class="two_a" href="#/login">
              <img src="./ul_5.png" alt="">
              <span>回复</span>
            </a>
          </li>
          <li class="ul_1_li">
            <a class="two_a" href="#/login">
              <img src="./ul_6.png" alt="">
              <span>退换货</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="three_wrapper">
        <ul class="three_ul">
          <li class="three_li">
            <a href="#/login">
              <img src="./i_1.png" alt="">
              <span>我的订单</span>
              <span class="jianjian"></span>
            </a>
          </li>
        </ul>

        <ul class="three_ul">
          <li class="three_li">
            <a href="#/login">
              <img src="./i_2.png" alt="">
              <span>我的优惠券</span>
              <span class="jianjian"></span>
            </a>
          </li>
          <li class="three_li">
            <a href="#/login">
              <img src="./i_3.png" alt="">
              <span>现金积分</span>
              <span class="jianjian"></span>
            </a>
          </li>
          <li class="three_li">
            <a href="#/login">
              <img src="./i_4.png" alt="">
              <span>关于发票</span>
              <span class="jianjian"></span>
            </a>
          </li>
        </ul>

        <ul class="three_ul">
          <li class="three_li">
            <a href="#/login">
              <img src="./i_5.png" alt="">
              <span>密码和登录信息</span>
              <span class="jianjian"></span>
            </a>
          </li>
          <li class="three_li">
            <a href="#/login">
              <img src="./i_6.png" alt="">
              <span>老会员建议</span>
              <span class="jianjian"></span>
            </a>
          </li>
          <li class="three_li">
            <a href="#/login">
              <img src="./i_7.png" alt="">
              <span>客户服务</span>
              <span class="jianjian"></span>
            </a>
          </li>
          <li class="three_li">
            <a href="#/login">
              <img src="./i_8.png" alt="">
              <span>地址管理</span>
              <span class="jianjian"></span>
            </a>
          </li>
          <li class="three_li">
            <a href="#/login">
              <img src="./i_9.png" alt="">
              <span>手机验证</span>
              <span class="jianjian"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import footer from  '../footer/footer.vue'
  export default {
      components: {
          'my-footer':footer
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
  span
    position absolute
    right 12px
    font-size 18px
.body_wrapper
  padding-top 48px
  padding-bottom 80px
  .loginOrRegister
    background-image url('./background.png')
    background-repeat no-repeat
    background-size 100%
    height 108px
    .not_login
      height 40px
      line-height 40px
      font-size 18px
      text-align center
      color #222
    .big_wrapper
      position relative
      border 1px solid #009c42
      border-radius 20px
      width: 137px
      height: 38px
      margin 5px auto 0
      text-align center
      .onepx
        width 1px
        height 1.5rem
        position absolute
        background-color #009a42
        left 50%
        top 50%
        margin-top -0.75rem
      .login
        display inline-block
        text-align center
        float: left;
        line-height 38px
        color #009c42
        width 50%
      .register
        display inline-block
        text-align center
        float: right
        line-height 38px
        width 50%
        color #009c42
  .two_ul
    .ul_1
      overflow hidden
      width 100%
      height 60px
      border-bottom 1px solid #dedede
      .ul_1_li
        width: 33%;
        height: 30px;
        float: left;
        border-right: 1px solid #dedede;
        line-height: 35px;
        margin-top 17px
        .two_a
          display block
          width 100%
          line-height 30px
          transform: translateY(-10px)
          img,.ul_2
            display inline-block
            width 38px
            padding 8px 2px 8px 17px
          span
            vertical-align: 63%;
            line-height: 36px;
            font-size 14px
  .three_wrapper
    .three_ul
      border-bottom 10px solid #eee
      .three_li
        width: 100%;
        height: 60px
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        margin: -1px auto 0;
        a
          width: 100%;
          height: 62px;
          display: block;
          img
            width: 30px;
            overflow: hidden;
            display: inline-block;
            float: left;
            margin: 15px 10px 0;
          span
            line-height 62px
          .jianjian
            width: 10px;
            height: 10px;
            display: inline-block;
            float: right;
            border-right: 2px solid #bbb;
            border-top: 2px solid #bbb;
            margin: 25px 10px 0 0;
            transform: rotate(45deg)
</style>
