<template>
  <div class="pro-i" @click="click">

    <van-image :src="product.photo" width="100%">
    </van-image>
    
    <div class="title">{{product.name}}</div>
    <div class="desc">{{product.intro}}</div>
    <div class="price-container">
      <div v-if="product.price" class="price-off" :style="priceStyle">￥{{product.price}}</div>
      <div :class="product.price? 'market-price':'price'" :style="priceStyle">￥{{product.market_price}}</div>
      <div v-if="product.price" class="priceoff-box">限时折扣</div>
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
      return 'color:' + this.priceColor;
    }
  },
  name: 'product-list-item',
  props: ["product", "imgSize", "priceColor"],

  methods: {
    click(){
      this.$router.push({name:'ProductDetail',query:{product_id:this.product.product_id}})
    }
  }
}
</script>

<style scoped>
.pro-i{
  width:50%;
}

 .title,  .desc,  .price-container{
    padding: 0 6px;
}

.title{
  font-size: 14px;
  line-height: 150%;
  color: #333;
  text-decoration: none;
}

.desc{
  font-size: 12px;
  line-height: 200%;
  color: #999;
}

.price-container{
  clear: both;
}

.price-off{
  line-height: 30px;
  font-size: 16px;
  color: #FF6010;
  font-weight: bold;
  float: left;
}

.price{
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  float: left;
}

.market-price{
  text-decoration: line-through;
  margin-left:3px;
  line-height: 30px;
  font-size: 12px;
  color:#929292;
  float: left;
}

.priceoff-box{
  float: right;
  margin-right: 10px;
  width: 60px;
  height: 20px;
  background: #FFECE3;
  font-size: 12px;
  color: #FF6010;
  line-height: 20px;
  text-align: center;
}

</style>
