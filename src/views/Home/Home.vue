<template>
  <div class="home">
    <van-search v-model="search" placeholder="请输入搜索关键词" @keydown.enter="Search"/>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in Swipes" :key="item.id"><van-image :src="item.image"/></van-swipe-item>
    </van-swipe>

    <icons-line-in-home :IconsLine="IconsLine"></icons-line-in-home>

    <van-divider class="divider">推荐商品</van-divider>

    <van-tabs v-model="active">
      <van-tab v-for="(value,key) in HomeTab" :key="key" :title="value">
        <product-list-item :ProductList="ProductList" @pulldown="pulldown"/>
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
import { getHomepageList } from '@/api/home'
import { getProductListWithPagination }  from '@/api/product'

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
    this.getHomepageList()
  },

  methods: {
    async getHomepageList(){
      const response = await getHomepageList()
      this.Swipes = response.data.swipes
      this.IconsLine = response.data.buttons
      this.HomeTab = response.data.tabs
      this.getProductListWithPagination()
    },

    async getProductListWithPagination(){
      for (let x in this.HomeTab){
        this.Pagination[this.HomeTab[x]] = {"currentpage": 1,"pagesize": 20}
        this.ProductList[this.HomeTab[x]] = await getProductListWithPagination('man',JSON.stringify(this.Pagination[this.HomeTab[x]]))
        console.log(this.ProductList[this.HomeTab[x]]);
      }
    },

    pulldown(currentpage){
      console.log(currentpage);
    },

    Search(){
      this.$router.push({name:'HomeSearch',query:{product_name:this.search}})
    }
  },
  data() {
    return {
      value: '',
      active: 2,
      ProductList: {},
      Pagination:{},
      Swipes: [],
      IconsLine:[],
      HomeTab:{},
      search:''
    }
  }
}
</script>
<style>
.my-swipe .van-swipe-item {
  height: 150px;
}

.divider {
  color: #333333;
  font-weight: bold;
  border-color: #d7d7d7;
  margin-bottom: 0;
}
</style>
