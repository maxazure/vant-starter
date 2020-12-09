<template>
  <div class="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
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

    <van-tabs v-model="active">
      <van-tab title="男装">
        <div class="pro-container">
            <product-list-item v-for="item in list" :key="item" />
        </div>
      </van-tab>
      <van-tab title="女装">
        <div class="pro-container">
            <product-list-item v-for="item in list" :key="item" />
        </div>
      </van-tab>
      <van-tab title="童装">
        <div class="pro-container">
            <product-list-item v-for="item in list" :key="item" />
        </div>
      </van-tab>
      <van-tab title="羽绒服">
        <div class="pro-container">
            <product-list-item v-for="item in list" :key="item" />
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem";
import { Search, Swipe, SwipeItem,Grid, GridItem, Icon, Tab, Tabs  } from 'vant';

export default {
  components:{
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    ["product-list-item"]: ProductListItem,
  },
  name: 'Home',
   data() {
    return {
      value: '',
      active: 2,
      list:[1,2,3,4,5,6,7,8,9,10],
    };
  },

}
</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .pro-container{
    /* overflow: hidden; */
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }
  .pro-container .pro-i{
    /* float: left; */
  }
</style>