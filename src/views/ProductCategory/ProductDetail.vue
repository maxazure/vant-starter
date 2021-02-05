<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-swipe class="image" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in product.images" :key="index">
        <van-image :src="item.product_image" />
      </van-swipe-item>
    </van-swipe>
    <div style="height:40px;width:330px;margin-left:22px;margin-right:22px;margin-top:9px;margin-bottom:9px">
      
    </div>
    <van-row style="height:40px;width:330px;margin-left:22px;margin-right:22px;margin-top:9px;margin-bottom:9px">
      <van-col class="price" span="12">
        <div></div>
        内购价￥{{product.price}}
      </van-col>
      <van-col span="12" style="font-size:12px">
        <van-row>降价通知</van-row>
        <van-row><span>初上市价格(吊牌价)：</span><span>￥{{product.market_price}}</span></van-row>
      </van-col>
    </van-row>
    <van-divider :style="{borderColor:'#BBBBBB'}"></van-divider>
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
        <van-image v-for="(item,key) in product.colors" :key="key" height="40px" width="40px" :src="item.photo" :class="{ColorButton_Inactive: !item.active,ColorButton_Active: item.active}" @click="chooseColor(item.color_id,key)"></van-image>
        <div style="margin-bottom:10px">尺码：</div>
        <!-- 上下两个v-for循环不能都用key作为“:key”，会出现因重复的key的报错 -->
        <div v-for="(item,key) in sizetable" :key="item.sku" :class="{SizeButton_Inactive: !item.active,SizeButton_Active: item.active}" @click="chooseSize(item.size_id,key)">{{item.name}}</div>
      </div>

      <!-- <div style="margin:20px">
        <div style="margin-bottom:10px">配送方式：</div>
        <van-radio-group v-model=" ExpressDelivery">
          <van-radio name="1" style="margin-bottom:10px">门店自提</van-radio>
          <van-radio name="2" style="margin-bottom:10px">快递配送</van-radio>
        </van-radio-group>
      </div> -->

      <van-button style="width:100%;position:fixed;bottom:0" @click="confirm">确定</van-button>
    </van-action-sheet>
  </div>
</template>

<script>
import { Image as VanImage, GoodsAction, GoodsActionIcon, GoodsActionButton, ActionSheet, Card, Button, Tag, RadioGroup, Radio, NavBar, Swipe, SwipeItem, Divider } from 'vant';
import {getProductInfo} from '@/api/product';
import {addShoppingCartItem} from '@/api/ShoppingCart'

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
    [Radio.name]:Radio,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Divider.name]:Divider
  },

  data(){
    return{
      product:[],
      sizetable:[],
      cardtitle:'商品标题',
      number:1,
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
      this.product = response.data
      this.sizetable = response.data.colors[0].sizes
      console.log(this.product);
    },

    addShoppingCartItem(){
      const NewItem = {}
      NewItem[this.product.id] = 2
      this.$store.commit('shoppingcart/AddShoppingCartItem',NewItem)
    },

    chooseColor(color_id,key){
      this.color = color_id
      if(this.product.colors[key].active){
        this.$set(this.product.colors[key],'active',false)
      }
      else{
        Object.values(this.product.colors).forEach(item => {this.$set(item,'active',false)})
        this.$set(this.product.colors[key],'active',true)
      }
      console.log(this.color);
    },

    chooseSize(size_id,key){
      this.size = size_id
      if(this.sizetable[key].active){
        this.$set(this.sizetable[key],'active',false)
      }
      else{
        Object.values(this.sizetable).forEach(item => {this.$set(item,'active',false)})
        this.$set(this.sizetable[key],'active',true)
      }
      console.log(this.size);
    },

    async confirm(){
      const output = {product_id:this.product.product_id, quantity:this.number, color_id:this.color, size_id:this.size}
      console.log(output);
      await addShoppingCartItem(output)
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
  height: 375px;
  color:burlywood
}

.price{
  display: inline-block;
  font-weight: bold;
  color: #EC5A47;
  height: 22px;
  line-height: 22px;
  letter-spacing: -1px;
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

.ColorButton_Inactive{
  margin-right:10px;
  margin-bottom:10px;
}

.ColorButton_Active{
  margin-right:10px;
  margin-bottom:10px;
  border: 2px solid #298DF8;
}

.SizeButton_Inactive{
  height:30px;
  width:80px;
  border:solid 1px black;
  line-height:30px;
  text-align:center;
  display:inline-block;
  margin-right:10px;
  margin-bottom:10px
}

.SizeButton_Active{
  height:30px;
  width:80px;
  border: 2px solid #298DF8;
  line-height:30px;
  text-align:center;
  display:inline-block;
  margin-right:10px;
  margin-bottom:10px
}
  
</style>