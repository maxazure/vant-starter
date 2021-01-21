<template>
  <div>
    <van-nav-bar title="商品列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-divider :style="{color: '#333333', borderColor:'#D7D7D7', fontWeight: 'bold'}">{{this.$route.query.CategoryName}}</van-divider>
    <div class="list-container">
      <product-list-item v-for="(item,key) in ProductList" :key="key" :product="item"/>
    </div>
    <div v-show="FoldNavButton" class="NavButton" @click="FoldNavButton = !FoldNavButton">导航</div>
    <div v-show="!FoldNavButton" class="NavButton-Unfold">
      <div v-for="(item, key) in NavButtonList" :key="key" class="NavButton-Unfold__Element">{{item}}</div>
      <div class="NavButton-Unfold__Element" @click="FoldNavButton = !FoldNavButton">返回</div>
    </div>

  </div>
</template>

<script>
import { NavBar, Divider } from 'vant'
import ProductListItem from '@/components/ProductListItem.vue'
import { getProductListById } from '@/api/product.js'

export default {
  name:'ProductCategoryInner',

  components:{
    [NavBar.name]:NavBar,
    [Divider.name]:Divider,
    ['product-list-item']: ProductListItem
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
.list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

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

</style>