<template>
  <div>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { Card, SubmitBar } from 'vant';
import ShoppingCartItem from '@/components/ShoppingCartItem'

export default {

  name:'ShoppingCart',

  components:{
    [Card.name]: Card,
    [SubmitBar.name]:SubmitBar,
    ['shopping-cart-item']:ShoppingCartItem
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