<template>
<div class="container">
  <div class="header">
<van-nav-bar
  title="丽水美特斯邦威旗舰店"
/>
  </div>
  <div class="bd">
    <router-view />
  </div>
 <van-tabbar :placeholder="true">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search" to="about">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
.bd {
  /* padding-bottom: 500px; */
}
.footer{
  font-size: 12px;
  text-align: center;
  color: gray;
}
</style>
