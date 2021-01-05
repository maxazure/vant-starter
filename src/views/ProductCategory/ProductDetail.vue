<template>
  <div>
    <van-image class="image" :src="product.photo"><template v-slot:error>加载失败</template></van-image>
    <div>
      <div class="price">{{product.price}}</div>
      <div class="market-price">{{product.market_price}}</div>
      <div v-if="product.on_sale" class="priceoff-box">限时折扣</div>
    </div>
    <div class="title">{{product.name}}</div>
    <div class="subtitle">{{product.intro}}</div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addShoppingCartItem"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { Image as VanImage,GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import {getProductInfo} from '@/api/product';

export default {

  name:'ProductDetail',

  components:{
    [VanImage.name]: VanImage,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },

  data(){
    return{
      product:[]
    }
  },

  methods: {
    async getProductInfo(id){
      const response = await getProductInfo(id);
      this.product = response.data;
    },

    addShoppingCartItem(){
      const NewItem = {}
      NewItem[this.product.id] = 2
      this.$store.commit('shoppingcart/AddShoppingCartItem',NewItem)
      console.log(this.$store.getters.ShoppingCart);
    }
  },

  created(){
    this.getProductInfo(1)
  }
}
</script>

<style scoped>
.image{
  width: 100%;
  height: 400px;
  background: brown;
  color:burlywood
}

.price{
  display: inline-block;
  font-weight: bold;
  color: #FF6010;
  height: 20px;
  line-height: 20px;
}

.market-price{
  display: inline-block;
  color: #929292;
  height: 20px;
  line-height: 20px;
  text-decoration: line-through;
}

.subtitle{
  color: #AAAAAA;
}

.priceoff-box{
  display: inline-block;
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