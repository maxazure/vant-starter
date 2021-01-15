<template>
  <div>

    <div v-for="(item1,key1) in OrderList" :key="key1">
      <van-row>
        <van-divider>{{item1.status}}</van-divider>
        <!-- <van-checkbox-group v-model="OrderList"> -->
          <!-- <div style="display:flex"> -->
            <!-- <van-checkbox class="checkbox" name="a"></van-checkbox> -->
            <van-card v-for="(item2,key2) in item1.order_items" :key="key2" class="van-card" :num="item2.quantity" :price="item2.price" :title="item2.name" :thumb="item2.photo"/>
          <!-- </div> -->
        <!-- </van-checkbox-group> -->
      </van-row>
      <van-row style="display:flex;justify-content:flex-end">
        <p>总金额：</p>
        <p style="margin-right:20px;color:#EE0A24">{{item1.total_amount}}</p>
      </van-row>
      <van-row style="display:flex;justify-content:flex-end">
          <van-button style="margin-left:10px;margin-right:20px;background:#D7D7D7;color:white">取消订单</van-button>
          <van-button style="margin-left:10px;margin-right:20px;background:#EF0B25;color:white">立即付款</van-button>
      </van-row>
    </div>

  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, Divider, Button } from 'vant';
import {getOrder} from '@/api/Me.js';

export default {

  name:'OrderList',

  components:{
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Divider.name]:Divider,
    [Button.name]:Button
  },

  data(){
    return{
      OrderList:[],
      ConvertStatus:{0:'待确认',1:'已确认',2:'待付款',3:'已付款',4:'待发货',5:'已收货',6:'验货中',7:'已结束'}
    }
  },

  methods: {
    async getOrder(){
      const response = await getOrder()
      this.OrderList = response.data.orders
      this.OrderList.forEach(item =>{item.status = this.ConvertStatus[item.status]})
    }
  },

  created(){
    this.getOrder()
  }
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