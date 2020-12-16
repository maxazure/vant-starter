<template>
  <div>
    <div style="display:flex;justify-content:center;margin-top:15%">
      <van-image round></van-image>
    </div>
    <div style="display:flex;justify-content:center">NAME</div>
    <div style="display:flex;justify-content:center">discription</div>
    <van-cell-group style="margin-top:15%">
      <van-cell clickable is-link center>
        <template #title>全部订单</template>
      </van-cell>
      <van-cell clickable is-link center>
        <template #title>我的地址</template>
      </van-cell>
      <van-cell clickable is-link center>
        <template #title>修改个人信息</template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import {CellGroup,Cell,Image as VanImage} from 'vant';
export default {
  name:'Me',
  components:{
    [CellGroup.name]:CellGroup,
    [Cell.name]:Cell,
    [VanImage.name]:VanImage
  }
  
}
</script>

<style scoped>

</style>