<template>
  <div class="page">
    <van-nav-bar title="购物车"/>

    <van-checkbox-group v-model="CheckboxGroup">
      <shopping-cart-item :List="CartList" :AllChecked="AllChecked" @NewList="NewList"></shopping-cart-item>
    </van-checkbox-group>
    
    <van-row class="submitbar" type="flex" justify="space-between">
      <van-col class="submitbar__checkbox">
        <van-checkbox v-model="AllChecked" @click="AllChecked=!AllChecked"></van-checkbox>
        <div class="submitbar__checkboxdescription">全选</div>
      </van-col>
      <van-col>
        <div class="submitbar__primarydescription">总计：<span class="submitbar__totalprice">￥2200</span><span class="submitbar__pricedescription">(不含运费)</span></div>
        <div class="submitbar__subdescription">
          <div>已优惠￥20</div>
          <div class="submitbar__subdescriptionicon" @click="ShowActionSheet">优惠明细<van-icon name="arrow-down"></van-icon></div>
        </div>
      </van-col>
      <van-col>
        <van-button class="submitbar__button">提交订单(1)</van-button>
      </van-col>
    </van-row>

    <van-action-sheet v-model="ActionSheet" class="actionsheet__title" title="金额优惠明细" description="*实际优惠金额请以下单页为准" cancel-text="确定" :closeable="false" @cancel="ConfirmActionSheet">

      <van-row class="actionsheet__layout">

        <van-row class="actionsheet__layoutbypart" v-for="(item1,index1) in DiscountDetail" :key="index1">
          <van-row class="actionsheet__titlebypart">{{item1.product_name}}</van-row>
          <van-row class="actionsheet__contextone" type='flex' justify='space-between'>
            <van-col>吊牌价</van-col>
            <van-col>{{item1.market_price}}</van-col>
          </van-row>
          <van-row>
            <van-row class="actionsheet__contextone" type='flex' justify='space-between'>
              <van-col>指定价</van-col>
              <van-col>{{item1.price}}</van-col>
            </van-row>
            <van-row class="actionsheet__contextone" type='flex' justify='space-between'>
              <van-col>优惠</van-col>
              <van-col style="color:#FF4444">{{item1.discount}}</van-col>
            </van-row>
          </van-row>
          <van-row class="actionsheet__contexttwo" type='flex' justify='space-between'>
            <van-col>共优惠</van-col>
            <van-col style="color:#FF4444">{{item1.total_discount}}</van-col>
          </van-row>
          <van-row class="actionsheet__contexttwo" type='flex' justify='space-between'>
            <van-col>优惠后</van-col>
            <van-col style="color:#FF4444">{{item1.after_discount}}</van-col>
          </van-row>
        </van-row>

        <van-divider :style="{borderColor:'#797979',marginBottom:'0',marginTop:'2.25rem',marginLeft:'1rem',marginRight:'1rem'}"></van-divider>

        <van-row class="actionsheet__layoutbypart">
          <van-row class="actionsheet__titlebypart">活动优惠</van-row>
          <van-row class="actionsheet__contextone" type='flex' justify='space-between'>
            <van-col>满100减20</van-col>
            <van-col style="color:#FF4444">-￥10</van-col>
          </van-row>
        </van-row>

        <van-row class="actionsheet__layoutbypart">
          <van-row class="actionsheet__titlebypart" type='flex' justify='space-between'>
            <van-col>原价合计</van-col>
            <van-col>¥539.80</van-col>
          </van-row>
          <van-row class="actionsheet__contexttwo" type='flex' justify='space-between'>
            <van-col>优惠后合计</van-col>
            <van-col style="color:#FF4444">¥529.80</van-col>
          </van-row>
        </van-row>

      </van-row>

    </van-action-sheet>
  </div>
</template>

<script>
import { CheckboxGroup, Card, SubmitBar, NavBar, Checkbox, Button, Icon, ActionSheet, Divider } from 'vant';
import ShoppingCartItem from '@/components/ShoppingCartItem.vue'
import { getShoppingCartItem, getCheckout } from '@/api/ShoppingCart'

export default {

  name:'ShoppingCart',

  components:{
    [CheckboxGroup.name]:CheckboxGroup,
    [Card.name]: Card,
    [SubmitBar.name]:SubmitBar,
    ['shopping-cart-item']:ShoppingCartItem,
    [NavBar.name]:NavBar,
    [Checkbox.name]:Checkbox,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [ActionSheet.name]:ActionSheet,
    [Divider.name]:Divider
  },

  data(){
    return{
      CartList:[],
      CheckboxGroup:[],
      DiscountDetail:[],
      CartItemSelected:[],
      totalprice:0,
      AllChecked:false,
      ActionSheet:false
    }
  },

  computed:{
  },

  methods: {
    async getShoppingCartItem(){
      const response = await getShoppingCartItem()
      this.CartList = response.data[0].shoppingcart
      this.DiscountDetail =  response.data[0].discount_details
      console.log(this.CartList);
      console.log(this.DiscountDetail);
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

    ShowActionSheet(){
      this.ActionSheet = true
    },

    ConfirmActionSheet(){
      this.ActionSheet = false
    },

    onClickLeft(){
      this.$router.go(-1)
    },

    ConfirmOrder(){
      this.$router.push({name:'ConfirmOrder',query:{Order:JSON.stringify(this.CartItemSelected)}})
    },

    NewList(newlist){
      console.log(newlist);
      this.CartItemSelected = newlist
    }
  },

  watch:{
    CartItemSelected:{
      handler(){
        this.gettotalprice()
      }
    },

    CheckboxGroup:{
      handler(val){
        console.log(val);
      }
    }
  },

  created(){
    this.getShoppingCartItem()
  }
}
</script>

<style scoped>
.page{
  background-color: #F2F2F2;
  width: 100%;
  height: 100%;
}

.submitbar{
  position:fixed;
  bottom:50px;
  height:50px;
  width: 100%;
}

.submitbar__checkbox{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
}

.submitbar__checkboxdescription{
  margin-top: 0.312rem;
}

.submitbar__primarydescription{
  height: 1.375rem;
}

.submitbar__totalprice{
  color: #FF4444;
  font-weight: bold;
}

.submitbar__pricedescription{
  color: #D7D7D7;
  margin-left:0.5rem;
}

.submitbar__subdescription{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.375rem;
}

.submitbar__subdescriptionicon{
  display: flex;
  align-items:center;
}

.submitbar__button{
  border-radius: 1.875rem;
  width: 7rem;
  margin-right: 1rem;
}

.actionsheet__layout{
  margin-bottom: 1rem;
}

.van-action-sheet__header{
  font-weight: bold;
}

.van-action-sheet__description{
  color: #797979;
  font-size: 0.875rem;
  padding-top: 0;
}

.actionsheet__layoutbypart{
  margin-top: 2.25rem;
  margin-left: 1rem;
  margin-right: 1.25rem;
}

.actionsheet__titlebypart{
  font-weight: bold;
}

.actionsheet__contextone{
  font-size: 0.875rem;
  margin-top: 0.625rem;
}

.actionsheet__contexttwo{
  margin-top: 0.625rem;
  font-weight: bold;
}

.van-action-sheet__cancel{
  background: #FF4444;
  color: #FFFFFF;
}
</style>