<template>
  <div class="home">
    <van-search v-model="search" placeholder="请输入搜索关键词" @keydown.enter="Search"/>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in Swipes" :key="item.id"><van-image :src="item.image"/></van-swipe-item>
    </van-swipe>

    <icons-line-in-home :IconsLine="IconsLine"></icons-line-in-home>

    <van-divider class="divider">推荐商品</van-divider>

    <van-tabs v-model="active">
      <van-tab v-for="(value1,key1,index1) in productlist" :key="index1" :title="key1">
        <div class="pro-container">
          <product-list-item
            v-for="(item2,key2) in value1"
            :product="item2"
            :key="key2"
          />
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import ProductListItem from '@/components/ProductListItem.vue'
import IconsLineInHome from '@/components/IconsLineInHome'
import {
  Search,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Icon,
  Tab,
  Tabs,
  Divider,
   Image as VanImage
} from 'vant'
import { getTwoColProductList } from '@/api/product'
import { getSwipesForHome, getIconsLine } from '@/api/home'

export default {
  name: 'Home',
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Divider.name]: Divider,
    [VanImage.name]:VanImage,
    ['product-list-item']: ProductListItem,
    ['icons-line-in-home']: IconsLineInHome
  },

  created() {
    this.getProductList()
    this.getSwipes()
    this.getIconsLine()
  },

  methods: {
    async getProductList() {
      const response = await getTwoColProductList()
      this.productlist = response.data
    },
    async getSwipes() {
      const response = await getSwipesForHome()
      this.Swipes = response.data
    },

    async getIconsLine(){
      const response = await getIconsLine()
      this.IconsLine = response.data
    },

    Search(){
      this.$router.push({name:'HomeSearch',query:{product_name:this.search}})
    }
  },
  data() {
    return {
      value: '',
      active: 2,
      productlist: [],
      Swipes: [],
      IconsLine:[],
      search:''
    }
  }
}
</script>
<style>
.my-swipe .van-swipe-item {
  height: 150px;
}
.pro-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.divider {
  color: #333333;
  font-weight: bold;
  border-color: #d7d7d7;
  margin-bottom: 0;
}
</style>
