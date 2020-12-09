<template>
  <div class="pro-i">
    <van-image width="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <div class="title">美特斯邦威短袖t恤男纯白上衣纯色简约打底衫潮纯棉白色男士体恤</div>
    <div class="desc">经典纯色 简约时尚 轻薄舒适</div>
    <div class="price">￥420</div>
  </div>
</template>

<script>
import { Image as VanImage, Button } from 'vant';

export default {
  components:{
    [Button.name]: Button,
    [VanImage.name]: VanImage,
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.pro-i{
  width:49.9%;
  line-height: 150%;
  height: 260px;
}
.pro-i .title{
  font-size: 14px;
  color: #333;
}

.pro-i .desc{
  font-size: 12px;
  color: #999;

}
.pro-i .price{
  font-size: 16px;
  font-weight: bold;
  color: red;

}
</style>
