<template>
  <div class="container">
    <!-- <div class="header">
      <van-nav-bar title="丽水美特斯邦威旗舰店"/>
    </div> -->
    <router-view/>
    <van-tabbar :placeholder="true" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/HomeSearch">搜索</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/ShoppingCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/Me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem } from 'vant';

export default {
    name: "Layout",
    components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
};
</script>

<style>

.footer{
  font-size: 12px;
  text-align: center;
  color: gray;
}
</style>
