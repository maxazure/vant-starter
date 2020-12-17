<template>
  <div>
    <van-nav-bar :title="$route.params.params" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <shopping-cart-item></shopping-cart-item>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { Card, SubmitBar,NavBar } from 'vant';
import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import {getProductListForHome} from '@/api/product'

export default {

  name:'ShoppingCart',

  components:{
    [Card.name]: Card,
    [SubmitBar.name]:SubmitBar,
    [NavBar.name]:NavBar,
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
    },

    onClickLeft(){
      this.$router.go(-1)
    }
  },

  created(){
    this.getProductList(1)
  }
}
</script>

<style scoped>

</style>