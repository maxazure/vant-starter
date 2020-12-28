<template>
  <div>
    <van-checkbox-group v-model="CartListSelected">
      <div style="display:flex" v-for="item in CartList" :key="item.id">
        <van-checkbox class="checkbox" name="a"></van-checkbox>
        <van-card class="van-card" :num="item.quantity" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
      </div>
    </van-checkbox-group>
  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup } from 'vant';
import {getShoppingCartItem} from '@/api/ShoppingCart'

export default {

  name:'ShoppingCartItem',

  components:{
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },

  data(){
    return{
      CartListSelected:[],
      CartList:[]
    }
  },

  methods: {
    async getShoppingCartItem(){
      const response = await getShoppingCartItem()
      console.log(response);
      this.CartList = response.data
    }
  },

  created(){
    this.getShoppingCartItem()
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
  width: 94%;
  align-self: center;
}

</style>