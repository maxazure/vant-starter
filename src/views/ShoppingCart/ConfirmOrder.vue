<template>
  <div>
    <adress-in-confirm-order></adress-in-confirm-order>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <van-submit-bar :price="3050" button-text="立即付款" @submit="onSubmit" />
  </div>
</template>

<script>
import { Card, SubmitBar } from 'vant';

import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import AdressInConfirmOrder from '@/components/AdressInConfirmOrder.vue'

import {getProductListForHome} from '@/api/product'

export default {

  name:'ConfirmOrder',

  components:{
    [Card.name]: Card,
    [SubmitBar.name]:SubmitBar,
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
    }
  },

  created(){
    this.getProductList(1)
  }
}
</script>

<style scoped>

</style>