<template style="height: 100%">
  <div class="cart">
    <header>
      <div class="header-content">
        <router-link to="/stroll">
          <span class="back-btn"></span>
        </router-link>
        <p>购物车</p>
      </div>
    </header>
    <div class="wrap" ref="wrap">
      <div>
        <div class="main" ref="main">
          <div class="login-wrapper">
            <a href="#" class="login-link">登录</a>
            <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
          </div>
          <div class="exchange-wrapper">
            <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt"><!--
   --><input type="button" value="兑换" class="exch-btn">
          </div>
          <div class="cart-main">
            <div class="cart-img">
              <img src="./cart.png" alt="购物车">
            </div>
            <div class="cart-text">
              <p>您的购物车还是空荡荡的</p>
            </div>
            <div class="cart-link">
              <router-link to="/">赶紧去逛逛</router-link>
            </div>
          </div>
          <div class="recommend">
            <p>Rico.S为你精心推荐</p>
          </div>
        </div>
        <div class="cart-assem-list" ref="cartAssemList">
          <ul style="width: 2040px">
            <li>
              <div class="cart-assem-item">
                <a href="#">
                  <img src="http://i.lifevccdn.com/upload/goods/D1508061652144511_d230x230.jpg">
                </a>
                <p class="title">水槽沥水置物架</p>
                <p class="price">￥9</p>
              </div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/25231"><img
                src="http://i.lifevccdn.com/upload/goods/D1706021747237547_d230x230.jpg"></a>
                <p class="title">舒适轻便家居拖鞋</p>
                <p class="price">￥19</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/17865"><img
                src="http://i.lifevccdn.com/upload/goods/D1610221728205420_d230x230.jpg"></a>
                <p class="title"> 甲醛清除剂(3盒装)</p>
                <p class="price">￥29</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/21451"><img
                src="http://i.lifevccdn.com/upload/goods/D1705041710023028_d230x230.jpg"></a>
                <p class="title">加拿大原生木浆卷纸（8卷）</p>
                <p class="price">￥19</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/22830"><img
                src="http://i.lifevccdn.com/upload/goods/D1611042139369284_d230x230.jpg"></a>
                <p class="title">活氧除水垢片(6片装)</p>
                <p class="price">￥9</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/23166"><img
                src="http://i.lifevccdn.com/upload/goods/D1611121539012128_d230x230.jpg"></a>
                <p class="title">加厚食品保鲜袋</p>
                <p class="price">￥9</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/20493"><img
                src="http://i.lifevccdn.com/upload/goods/D1608171045162381_d230x230.jpg"></a>
                <p class="title">双球无死角清洁马桶刷</p>
                <p class="price">￥19</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/16414"><img
                src="http://i.lifevccdn.com/upload/goods/D1510201743507674_d230x230.jpg"></a>
                <p class="title">懒人清洁拖把(不脏手型Ⅱ代)</p>
                <p class="price">￥49</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/24024"><img
                src="http://i.lifevccdn.com/upload/goods/D1704181709142278_d230x230.jpg"></a>
                <p class="title">可挂式防尘防潮收纳袋</p>
                <p class="price">￥19</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/25264"><img
                src="http://i.lifevccdn.com/upload/goods/D1707051627145658_d230x230.jpg"></a>
                <p class="title">席梦思保护套(梦幻系列)</p>
                <p class="price">￥109</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/24735"><img
                src="http://i.lifevccdn.com/upload/goods/D1706301536006353_d230x230.jpg"></a>
                <p class="title">柔纱布敏感肌肤毛巾</p>
                <p class="price">￥15</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#/item/22632"><img
                src="http://i.lifevccdn.com/upload/goods/D1611171952413457_d230x230.jpg"></a>
                <p class="title">时尚储物凳</p>
                <p class="price">￥69</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#"><img
                src="http://i.lifevccdn.com/upload/goods/D1611161133342386_d230x230.jpg"></a>
                <p class="title">防毛发防堵过滤网</p>
                <p class="price">￥9</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#"><img
                src="http://i.lifevccdn.com/upload/goods/D170615151903237_d230x230.jpg"></a>
                <p class="title">不粘少油烟炒锅(日本大金)</p>
                <p class="price">￥139</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#"><img
                src="http://i.lifevccdn.com/upload/goods/D1612031601433129_d230x230.jpg"></a>
                <p class="title">时尚防油污餐垫(2片装)</p>
                <p class="price">￥9</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#"><img
                src="http://i.lifevccdn.com/upload/goods/D1702241415015696_d230x230.jpg"></a>
                <p class="title">防尘防潮内衣整理盒</p>
                <p class="price">￥29</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#"><img
                src="http://i.lifevccdn.com/upload/goods/D1612302250008504_d230x230.jpg"></a>
                <p class="title">随心拼毛毡地垫（8片装）</p>
                <p class="price">￥35</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#"><img
                src="http://i.lifevccdn.com/upload/goods/D1707071715578307_d230x230.jpg"></a>
                <p class="title">麦饭石不粘锅</p>
                <p class="price">￥199</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#"><img
                src="http://i.lifevccdn.com/upload/goods/D1612310116162873_d230x230.jpg"></a>
                <p class="title">马桶除菌去污剂（省心型）</p>
                <p class="price">￥19</p></div>
            </li>
            <li>
              <div class="cart-assem-item"><a href="#">
                <img
                  src="http://i.lifevccdn.com/upload/goods/D1601121539343815_d230x230.jpg"></a>
                <p class="title">酵素衣物顽渍净(超强洁净)</p>
                <p class="price">￥15</p></div>
            </li>
          </ul>
        </div>
        <br><br><br><br><br><br>
      </div>
    </div>


    <my-footer></my-footer>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import footer from '../footer/footer.vue'
  export default {
    created () {
      this.$nextTick(() => {
        new BScroll(this.$refs.cartAssemList, {
          scrollX: true,
          click:true
        })
        this.bsy =new BScroll(this.$refs.wrap, {
          click:true
        })
      })
      let html=document.documentElement
      html.style.height = '100%'
      this.$nextTick(()=>{
          let height=html.getBoundingClientRect().height
        this.$refs.main.style['min-height'] = `${height}px`
      })
    },
    mounted () {
      this.$nextTick(()=>{
          this.bsy.refresh()
      })
    },
    components: {
      "my-footer":footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart
    width 100%
    height 100%
    header
      padding 0
      width 100%
      height 50px
      line-height 50px
      text-align center
      font-size 20px
      color white
      background #89be48
      position: fixed
      top: 0
      z-index 999
      .header-content
        position relative
        .back-btn
          background: url('./back.png') no-repeat
          -webkit-background-size 16px 21px
          background-size 16px 21px
          position absolute
          display block
          width 16px
          height 21px
          left 5px
          top 16px
    .wrap
      height 500px
      div
        .main
          box-sizing border-box
          padding-bottom 10rem
        .cart-assem-list
           margin-top -22rem
      .login-wrapper
        width 100%
        margin-top 50px
        height 36px
        background-color #f0fae6
        padding 12px 0 4px
        .login-link
          width 18%
          height 24px
          margin-left 3%
          text-align center
          display inline-block
          background: #fff
          border 1px solid #8bc146
          font-size 16px
          color #88c13e
          line-height 24px
          vertical-align top
        .login-tip
          display inline-block
          width 73%
          padding 0 2%
          font-size 15px
      .exchange-wrapper
        width 97%
        height 36px
        background-color #fff
        margin 0
        padding 6px 0 6px 3%
        border-bottom 1px solid #f2f2f2
        .exch-ipt
          padding-left 10px
          width 74%
          height 35px
          line-height 35px
          display inline-block
          border 1px solid #e7e7e7
          background #fff
          font-size 16px
          outline none
          &::-webkit-input-placeholder
            text-align center
            font-size 14px
        .exch-btn
          width 20%
          height 35px
          line-height 35px
          display inline-block
          background #fff
          text-align center
          font-size 14px
          color #6fbd00
          letter-spacing 1px
          border 1px solid #6fbd00
          outline none
      .cart-main
        width 100%
        background-color #f2f2f2
        text-align center
        .cart-img
          padding-left 24px
          padding-top 10px
          box-sizing border-box
          img
            max-width 160px
        .cart-text
          font-size 18px
          line-height 35px
          color rgb(102, 102, 102)
        .cart-link
          border 1px solid rgb(137, 190, 72)
          padding 7px 18px
          display inline-block
          border-radius 6px
          font-size 15px
          letter-spacing 1px
          margin-bottom 10px
          a
            color rgb(137, 190, 72)
      .recommend
        width 94%
        overflow hidden
        border-bottom 1px solid #ccc
        text-align left
        font-size 16px
        color #333
        line-height 24px
        margin 0 auto
        padding 9px 3%
    .cart-assem-list
      width: 100%;
      max-height: 12rem;
      margin: 0 auto;
      padding: 16px 0;
      overflow hidden
      ul
        li
          float: left
          width: 96px
          margin-right 6px
          a
            img
              width 100%
          .title
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            font-size 13px
            line-height 25px
          .price
            font-size 13px
</style>
