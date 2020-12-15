<template>
  <div>
    <van-divider>2020-12-10 10:10:10</van-divider>
    <!-- <van-checkbox-group v-model="OrderList"> -->
      <div style="display:flex">
        <!-- <van-checkbox class="checkbox" name="a"></van-checkbox> -->
        <van-card class="van-card" num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
      </div>
    <!-- </van-checkbox-group> -->
    <vam-row style="display:flex;justify-content:flex-end">
      <p>总金额：</p>
      <p style="margin-right:20px;color:#EE0A24">￥30</p>
    </vam-row>
    <vam-row style="display:flex;justify-content:flex-end">
        <van-button style="margin-left:10px;margin-right:20px;background:#D7D7D7;color:white">取消订单</van-button>
        <van-button style="margin-left:10px;margin-right:20px;background:#EF0B25;color:white">立即付款</van-button>
    </vam-row>
  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, Divider, Button, Row, Col } from 'vant';


export default {

  name:'OrderList',

  components:{
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Divider.name]:Divider,
    [Button.name]:Button,
    [Row.name]:Row,
    [Col.name]:Col
  },

  data(){
    return{
      OrderList:[]
    }
  },

  methods: {},

  created(){}
}
</script>

<style scoped>
.checkbox{
  display: inline-block;
  align-self: center;
}

.van-card{
  float: right;
  width: 100%;
  align-self: center;
}

</style>