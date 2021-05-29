<template>
  <div>
    <van-nav-bar title="商品列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-divider :style="{color: '#333333', borderColor:'#D7D7D7', fontWeight: 'bold'}">{{this.$route.query.CategoryName}}</van-divider>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="two-columns">
        
      <van-row gutter="10" v-for="(item,key) in ProductList" :key="key" @click="click(item.product_id)" class="listlayout">
        <van-col span="9">
          <van-image :src="item.photo" width="140" height="140"></van-image>
        </van-col>
        <van-col span="15">
          <div style="font-size: 14px;line-height: 150%;color: #333;margin-bottom: 1rem">{{item.name}}</div>
          <div style="font-size: 12px;line-height: 200%;color: #999;">{{item.intro}}</div>
          <van-row>
            <van-col>
              <div v-if="item.price" style="line-height: 30px;font-size: 16px;color: #FF6010;">￥{{item.price}}</div>
            </van-col>
            <van-col>
              <div :class="item.price? 'market-price':'price'" style=" text-decoration: line-through;margin-left:3px; line-height: 30px;font-size: 12px;color:#929292;">￥{{item.market_price}}</div>
            </van-col>
          </van-row>
          <van-row>
            <van-button size="mini" v-if="!item.is_discount" class="priceoff-box">限时折扣</van-button>
            <van-button size="mini" v-if="!item.is_new" class="priceoff-box">新品上市</van-button>
            <van-button size="mini" v-if="!item.is_derated" class="priceoff-box">领券再减</van-button>
          </van-row>
        </van-col>
      </van-row>     

    </van-list>
    
    <div v-show="FoldNavButton" class="NavButton" @click="FoldNavButton = !FoldNavButton">导航</div>
    <div v-show="!FoldNavButton" class="NavButton-Unfold">
      <div v-for="(item, key) in NavButtonList" :key="key" class="NavButton-Unfold__Element">{{item}}</div>
      <div class="NavButton-Unfold__Element" @click="FoldNavButton = !FoldNavButton">返回</div>
    </div>

  </div>
</template>

<script>
import { NavBar, Divider,Image as VanImage, Button, List } from 'vant'
import { getProductListById } from '@/api/product.js'

export default {
  name:'ProductCategoryInner',

  components:{
    [NavBar.name]:NavBar,
    [Divider.name]:Divider,
    [Button.name]: Button,
    [VanImage.name]: VanImage,
    [List.name]:List
  },

  data(){
    return{
      ProductList:[],
      NavButtonList:['首页','购物车','心愿单'],
      FoldNavButton: true
    }
  },
  
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },

    click(product_id){
      this.$router.push({name:'ProductDetail',query:{product_id:product_id}})
    },

    async getProductListById(){
      const response = await getProductListById(this.$route.query.CategoryId)
      this.ProductList = response.data
    }
  },

  created(){
    this.getProductListById()
  }
  
}
</script>

<style scoped>

.NavButton{
  position: fixed;
  right: 10px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: black solid 2px;
  opacity: 0.7;
  background-color: rgb(255, 255, 255);
  line-height: 40px;
  text-align: center;
  color: black;
  font-weight: bolder;
  font-size: 12px;
}

.NavButton-Unfold{
  position: fixed;
  right: 10px;
  bottom: 20px;
}

.NavButton-Unfold__Element{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: black solid 2px;
  opacity: 0.7;
  background-color: rgb(255, 255, 255);

  line-height: 40px;
  text-align: center;
  color: black;
  font-weight: bolder;
  font-size: 12px;

  margin-top: 10px;
}

.listlayout{
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  border-top: 1px #797979 solid;
  border-bottom: 1px #797979 solid;
}

</style>