<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
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
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="$router.push({name:'ShoppingCart'})"/>
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" @click="showcard = !showcard"/>
      <van-goods-action-button type="danger" text="立即购买" @click="showcard = !showcard"/>
    </van-goods-action>

    <van-action-sheet v-model="showcard" title="标题" :style="{height:'100%'}">
      <van-card :num="number" :price="price" :desc="description" :title="cardtitle" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" @click="showPlusMinus = !showPlusMinus">
        <template v-if="originalprice" #origin-price>
          ￥{{originalprice}}
        </template>
        <template #tags>
          <div style="display:inline-block">已选择：</div>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button v-if="showPlusMinus" size="mini" style="position:absolute;left:0;width:50%;padding: 0" @click.stop="number++">+</van-button>
          <van-button v-if="showPlusMinus" size="mini" style="position:absolute;right:0;width:50%;padding: 0" :disabled='!number' @click.stop="number--">-</van-button>
        </template>
      </van-card>

        <div style="margin:20px">
          <div style="margin-bottom:10px">颜色：</div>
          <div style="height:40px;width:40px;background:black" @click="chooseColor"></div>
        </div>

        <div style="margin:20px">
          <div style="margin-bottom:10px">尺码：</div>
          <div style="height:30px;width:80px;border: solid 1px black;line-height:30px" @click="chooseSize">165/76A/S</div>
        </div>

        <div style="margin:20px">
          <div style="margin-bottom:10px">配送方式：</div>
          <van-radio-group v-model=" ExpressDelivery">
            <van-radio name="1">门店自提</van-radio>
            <van-radio name="2">快递配送</van-radio>
          </van-radio-group>
        </div>

        <van-button style="width:100%;position:fixed;bottom:0" @click="confirm">确定</van-button>
    </van-action-sheet>
  </div>
</template>

<script>
import { Image as VanImage, GoodsAction, GoodsActionIcon, GoodsActionButton, ActionSheet, Card, Button, Tag, RadioGroup, Radio, NavBar } from 'vant';
import {getProductInfo} from '@/api/product';

export default {

  name:'ProductDetail',

  components:{
    [NavBar.name]:NavBar,
    [VanImage.name]: VanImage,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [ActionSheet.name]:ActionSheet,
    [Card.name]:Card,
    [Button.name]:Button,
    [Tag.name]:Tag,
    [RadioGroup.name]:RadioGroup,
    [Radio.name]:Radio
  },

  data(){
    return{
      product:[],
      cardtitle:'商品标题',
      number:2,
      price:10,
      originalprice:'',
      description: 'hsoiuadha',
      ExpressDelivery: '1',
      color:'',
      size:'',
      showcard:false,
      showPlusMinus: false
    }
  },

  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },

    async getProductInfo(id){
      const response = await getProductInfo(id);
      this.product = response.data;
    },

    addShoppingCartItem(){
      const NewItem = {}
      NewItem[this.product.id] = 2
      this.$store.commit('shoppingcart/AddShoppingCartItem',NewItem)
      console.log(this.$store.getters.ShoppingCart);
    },

    chooseColor(){
      this.color = 1
    },

    chooseSize(){
      this.size = '165/76A/S'
    },

    confirm(){
      this.$router.push({name:'ShoppingCart'})
    }
  },

  created(){
    this.getProductInfo(this.$route.query.product_id)
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