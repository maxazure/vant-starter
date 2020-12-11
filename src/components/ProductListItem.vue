<template>
  <div class="pro-i">
    <router-link :to="{ path: '/ProductDetail'}">
      <van-image :src="product.photo" width="100%" height="300" />
    </router-link>
    
    <div class="title"><router-link class="title-content" :to="{ path: '/detail/'+ product.id, params: { id: product.id }}">{{product.name}}</router-link></div>
    <div class="desc">{{product.intro}}</div>
    <div class="price-container">
      <div v-if="!product.market_price" class="price" :style="priceStyle">￥{{product.price}}</div>
      <div v-else class="market_price" :style="priceStyle">￥{{product.market_price}}</div>
      <div class="priceoff-box">限时折扣</div>
    </div>
  </div>
</template>

<script>
import { Image as VanImage, Button } from 'vant';

export default {
  components:{
    [Button.name]: Button,
    [VanImage.name]: VanImage,
  },

  computed: {
    priceStyle () {
      return 'color: ' + this.priceColor;
    }
  },
  name: 'mx-product-list-item',
  props: ["product", "imgSize", "priceColor"]
}
</script>

<style scoped>
.pro-i{
  width:50%;
  line-height: 150%;
}
.pro-i .title, .pro-i .desc, .pro-i .price{
    padding: 0 6px;
}
.pro-i .title{
  font-size: 14px;
  color: #333;
  text-decoration: none;
}

.pro-i .desc{
  font-size: 12px;
  color: #999;
}

.pro-i .price-container{
  height: 20px;
}

.pro-i .price{
  line-height: 20px;
  float: left;
  font-size: 16px;
  font-weight: bold;
}

.pro-i .market_price{
  line-height: 20px;
  float: left;
  font-size: 16px;
  font-weight: bold;
}

.pro-i .priceoff-box{
  float: right;
  margin-right: 10px;
  width: 60px;
  height: 20px;
  background: #FFECE3;
  font-size: 5px;
  color: #FF6010;
  line-height: 20px;
  text-align: center;
}

</style>
