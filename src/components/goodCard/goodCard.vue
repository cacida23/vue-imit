<template>
  <div class="goodCard">
    <div class="item clearbox">
      <a href="#">
        <img :src="`http://i.lifevccdn.com${good.ImageUrl.slice(0,-4)}_d1242x0.jpg`" alt="">
      </a>
      <div class="dec clearbox">
        <p>
          {{good.Name}}
        </p>
        <div class="price">
          <div class="price-cont">
            <!--<span class="act-tag title">限时体验价</span>-->
            <span >￥</span> <span data-v-cbe28f50="">{{good.SalePrice}}</span>&nbsp;
            <!--<span class="original-price">￥{{good.SalePrice}}</span>-->
            <span class="promo-lable" v-if="good.PriceTag!=''">{{good.PriceTag}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      props:{
        good:{
            type:Object,
            required:false,
            default:  function () {
              return {
                "ItemInfoId": 25405,
                "Name": "上开式可叠加收纳箱",
                "ImageUrl": "/upload/AppItemInfoImage/ad5bea9a90a4406ba540382f4d24e2ae.jpg",
                "Code": "81245012",
                "SalePrice": 39,
                "PriceTag": "新",
                "PriceTags": null,
                "CommentCount": 0,
                "SortIndex": null,
                "ActivityPrice": 0,
                "ActivityTag": null,
                "IsEmpty": false,
                "Appeal": "杂物们，快到箱子里去",
                "IsPotter": false,
                "CountdownTag": null,
                "CountdownTime": 0,
                "Uri": "inner:///item/25405",
                "MaskImageUrl": null
              }
            }
        }
      }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .item
    max-width 100%
    margin-top 2rem
    border 1px solid #ddd
    a
      display inline-block
      width 100%
    img
      width 100%
    .dec
      background #fff
      font-size 1.35rem
      p
        text-align: left;
        font-size: 1.35rem;
        color: #333;
        line-height: 2.6rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-top: .5rem;
        width 94%
        margin 0 auto
      .price
        width 94%
        margin 0 auto
        padding-bottom 0.5rem
        overflow auto

        .price-cont
          min-width: 68%;
          overflow: hidden;
          float: left;
          line-height: 1.8rem;
          margin-top: .2rem;
          .act-tag {
            background-color: #fff000;
          }
          .act-tag,.original-price,.promo-lable
            display: inline-block;
            padding: 1px 3px
          .original-price
            color: #ccc;
            text-decoration: line-through;
          .promo-lable
            background #c00
        .item-comment
          color  #999
          text-align right
          float: right
          line-height 1.8rem;
</style>
