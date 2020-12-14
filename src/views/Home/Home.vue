<template>
  <div class="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in Swipes" :key="item.id"
        ><img src="item.image"
      /></van-swipe-item>
    </van-swipe>

    <van-grid>
      <van-grid-item>
        <van-icon name="gem-o" class="van-grid-item__icon" color="red" />
        <span class="van-grid-item__text">会员</span>
      </van-grid-item>

      <van-grid-item>
        <van-icon name="star-o" class="van-grid-item__icon" color="red" />
        <span class="van-grid-item__text">精选</span>
      </van-grid-item>

      <van-grid-item>
        <van-icon name="coupon-o" class="van-grid-item__icon" color="red" />
        <span class="van-grid-item__text">优惠券</span>
      </van-grid-item>

      <van-grid-item>
        <van-icon name="location-o" class="van-grid-item__icon" color="red" />
        <span class="van-grid-item__text">签到</span>
      </van-grid-item>
    </van-grid>

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
import ProductListItem from '@/components/ProductListItem'
import {
  Search,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Icon,
  Tab,
  Tabs,
  Divider
} from 'vant'
import { getProductListForHome } from '@/api/product'
import { getSwipesForHome } from '@/api/home'

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
    ['product-list-item']: ProductListItem
  },
  created() {
    this.getProductList(1, 'list1')
    this.getProductList(2, 'list2')
    this.getProductList(3, 'list3')
    this.getProductList(4, 'list4')
    this.getSwipes()
  },
  methods: {
    async getProductList(id, list) {
      const response = await getProductListForHome(id)
      this[list] = response.data
    },
    async getSwipes() {
      const response = await getSwipesForHome()
      this.Swipes = response.data
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
      Swipes: []
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
