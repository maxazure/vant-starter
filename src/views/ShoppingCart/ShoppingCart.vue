<template>
  <div>
    <shopping-cart-item></shopping-cart-item>
    <van-submit-bar style="position:fixed;bottom:50px" :price="3050" button-text="提交订单" />
  </div>
</template>

<script>
import { Card, SubmitBar } from 'vant';
import ShoppingCartItem from '@/components/ShoppingCartItem.vue'

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
    onClickLeft(){
      this.$router.go(-1)
    }
  },

  created(){
    
  }
}
</script>

<style scoped>

</style>