<template>
  <div>
    <div style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)">成功下单</div>
    <div style="position:absolute;top:50%;text-align:center;width:100vw;">订单号：2983894344545454554</div>
    <div style="position:absolute;top:60%;left:50%;transform:translate(-50%,-50%)">
      <van-button style="background:#EF0B25;color:white">查看物流信息</van-button>
    </div>
    <div style="position:absolute;bottom:10%;display:flex;justify-content:space-around;width:100vw">
      <van-button style="background:#EF0B25;color:white">返回首页</van-button>
      <van-button style="background:#EF0B25;color:white">查看我的订单</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  components:{
    [Button.name]:Button
  }  
}
</script>

<style scoped>

</style>