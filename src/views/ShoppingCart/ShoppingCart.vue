<template>
  <div>
    <shopping-cart-item v-model="CartItemSelected" :CartList="CartList" @change="change"></shopping-cart-item>
    <van-submit-bar style="position:fixed;bottom:50px" :price="3050" button-text="提交订单" @submit="ConfirmOrder"/>
  </div>
</template>

<script>
import { Card, SubmitBar } from 'vant';
import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import { getShoppingCartItem } from '@/api/ShoppingCart'

export default {

  name:'ShoppingCart',

  components:{
    [Card.name]: Card,
    [SubmitBar.name]:SubmitBar,
    ['shopping-cart-item']:ShoppingCartItem
  },

  data(){
    return{
      CartList:[],
      CartItemSelected:[]
    }
  },

  methods: {
    async getShoppingCartItem(){
      const response = await getShoppingCartItem()
      this.CartList = response.data.cartitem
    },

    onClickLeft(){
      this.$router.go(-1)
    },

    ConfirmOrder(){
      this.$router.push({name:'ConfirmOrder'})
    },

    change(){
      console.log(this.CartItemSelected)
    }
  },

  created(){
    this.getShoppingCartItem()
  }
}
</script>

<style scoped>

</style>