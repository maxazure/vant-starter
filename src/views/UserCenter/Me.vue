<template>
  <div>
    <div style="display:flex;justify-content:center;margin-top:15%">
      <van-image round></van-image>
    </div>
    <div style="display:flex;justify-content:center">NAME</div>
    <div style="display:flex;justify-content:center">discription</div>
    <van-cell-group style="margin-top:15%">
      <van-cell clickable is-link center :to="{name:'MyOrder',params:{params:'全部订单'}}">
        <template #title>全部订单</template>
      </van-cell>
      <van-cell clickable is-link center :to="{name:'MyAddress',params:{params:'我的地址'}}">
        <template #title>我的地址</template>
      </van-cell>
      <van-cell clickable is-link center :to="{name:'RevisePersonalInfo',params:{params:'修改个人信息'}}">
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