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
  <div class="footer">
    版权所有@丽水美特斯邦威旗舰店
  </div>
</div>
</template>
<script>
import { NavBar } from 'vant';

export default {
    name: "Layout",
    components: {
    [NavBar.name]: NavBar,
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
