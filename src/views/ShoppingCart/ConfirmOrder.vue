<template>
  <div>
    <van-nav-bar title="确认订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <adress-in-confirm-order></adress-in-confirm-order>
    <shopping-cart-item :List="ItemList" :Radio="false"></shopping-cart-item>
    <van-submit-bar :price="totalprice" button-text="确认提交" @submit="onSubmit" />
  </div>
</template>

<script>
import { Card, SubmitBar,NavBar } from 'vant';

import { getOrder } from '@/api/ShoppingCart'

import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import AdressInConfirmOrder from '@/components/AdressInConfirmOrder.vue'


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

  computed:{
    totalprice(){
      let totalprice = 0
      this.ItemList.forEach(item => {
        totalprice += item.total_amount
      })
      return totalprice*100
    }
  },

  methods: {
    async getOrder(){
      const response = await getOrder(JSON.parse(this.$route.query.Order))
      this.ItemList = response.data.list
    },

    onClickLeft(){
      this.$router.go(-1)
    },

    onSubmit(){
      this.$router.push({name:'OrderSucceed'})
    }
  },

  created(){
    this.getOrder()
  }
}
</script>

<style scoped>

</style>