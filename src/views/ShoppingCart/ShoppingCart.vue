<template>
  <div>
    <van-nav-bar title="购物车"/>
    <shopping-cart-item :List="CartList" :AllChecked="AllChecked" @NewList="NewList"></shopping-cart-item>
    <van-submit-bar style="position:fixed;bottom:50px" :price="totalprice" button-text="提交订单" :disabled="CartItemSelected.length === 0" @submit="ConfirmOrder">
      <van-checkbox v-model="AllChecked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Card, SubmitBar,NavBar,Checkbox } from 'vant';
import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import { getShoppingCartItem, getCheckout } from '@/api/ShoppingCart'

export default {

  name:'ShoppingCart',

  components:{
    [Card.name]: Card,
    [SubmitBar.name]:SubmitBar,
    ['shopping-cart-item']:ShoppingCartItem,
    [NavBar.name]:NavBar,
    [Checkbox.name]:Checkbox
  },

  data(){
    return{
      CartList:[],
      CartItemSelected:[],
      totalprice:0,
      AllChecked:false
    }
  },

  computed:{
  },

  methods: {
    async getShoppingCartItem(){
      const response = await getShoppingCartItem()
      this.CartList = response.data.cartitem
      console.log(this.CartList);
    },

    async gettotalprice(){
      let totalprice = 0
      if (this.CartItemSelected.length !== 0){
        const response = await getCheckout(this.CartItemSelected)
        const amount = response.data.list
        amount.forEach(item => {totalprice += item.total_amount})
      }
      this.totalprice = totalprice*100
    },

    onClickLeft(){
      this.$router.go(-1)
    },

    ConfirmOrder(){
      this.$router.push({name:'ConfirmOrder',query:{Order:JSON.stringify(this.CartItemSelected)}})
    },

    NewList(newlist){
      this.CartItemSelected = newlist
    }
  },

  watch:{
    CartItemSelected:{
      handler(){
        this.gettotalprice()
      }
    }
  },

  created(){
    this.getShoppingCartItem()
  }
}
</script>

<style scoped>

</style>