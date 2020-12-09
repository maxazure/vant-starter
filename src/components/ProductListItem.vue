<template>
  <div class="pro-i">
    <router-link :to="{ path: '/detail/'+ product.id, params: { id: product.id }}">
      <van-image :src="product.photo" width="200" height="300" />
    </router-link>
    
    <div class="title"><router-link :to="{ path: '/detail/'+ product.id, params: { id: product.id }}">{{product.name}}</router-link></div>
    <div class="desc">{{product.intro}}</div>
    <div class="price" :style="priceStyle">￥{{product.price}}</div>
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

}

.pro-i .desc{
  font-size: 12px;
  color: #999;

}
.pro-i .price{
  font-size: 16px;
  font-weight: bold;

}
</style>
