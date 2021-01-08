<template>
  <div>
    <van-nav-bar title="确认订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <adress-in-confirm-order></adress-in-confirm-order>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <van-submit-bar :price="3050" button-text="确认提交" @submit="onSubmit" />
  </div>
</template>

<script>
import { Card, SubmitBar,NavBar } from 'vant';

import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import AdressInConfirmOrder from '@/components/AdressInConfirmOrder.vue'

import {getProductListForHome} from '@/api/product'

export default {

  name:'ConfirmOrder',

  components:{
    [Card.name]: Card,
    [SubmitBar.name]:SubmitBar,
    [NavBar.name]:NavBar,
    ['shopping-cart-item']:ShoppingCartItem,
    ['adress-in-confirm-order']: AdressInConfirmOrder
  },

  data(){
    return{
      ItemList:[]
    }
  },

  methods: {
    async getProductList(id){
      const response = await getProductListForHome(id);
      this.ItemList = response.data;
    },

    onClickLeft(){
      this.$router.go(-1)
    },

    onSubmit(){
      this.$router.push({name:'OrderSucceed'})
    }
  },

  created(){
    this.getProductList(1)
  }
}
</script>

<style scoped>

</style>