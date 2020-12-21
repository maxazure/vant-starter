<template>
  <div class="home">
    <van-search v-model="search" placeholder="请输入搜索关键词" @keydown.enter="Search"/>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in Swipes" :key="item.id"><van-image :src="item.image"/></van-swipe-item>
    </van-swipe>

    <icons-line-in-home :IconsLine="IconsLine"></icons-line-in-home>

    <van-divider class="divider">推荐商品</van-divider>

    <van-tabs v-model="active">
      <van-tab title="男装">
        <div class="pro-container">
          <product-list-item
            :product="item"
            v-for="item in list1"
            :key="item.id"
          />
        </div>
      </van-tab>
      <van-tab title="女装">
        <div class="pro-container">
          <product-list-item
            :product="item"
            v-for="item in list2"
            :key="item.id"
          />
        </div>
      </van-tab>
      <van-tab title="童装">
        <div class="pro-container">
          <product-list-item
            :product="item"
            v-for="item in list3"
            :key="item.id"
            priceColor="red"
          />
        </div>
      </van-tab>
      <van-tab title="羽绒服">
        <div class="pro-container">
          <product-list-item
            :product="item"
            v-for="item in list4"
            :key="item.id"
            priceColor="red"
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
    this.getProductList(1, 'list1')
    this.getProductList(2, 'list2')
    this.getProductList(3, 'list3')
    this.getProductList(4, 'list4')
    this.getSwipes()
    this.getIconsLine()
  },
  methods: {
    async getProductList(id, list) {
      const response = await getTwoColProductList(id)
      this[list] = response.data
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
      list1: [],
      list2: [],
      list3: [],
      list4: [],
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
