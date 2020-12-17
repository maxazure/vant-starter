<template>
  <div>
    <van-nav-bar :title="$route.params.params" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-tabs>
      <van-tab title="待付款">
        <order-list></order-list>
      </van-tab>
      <van-tab title="待收货">内容 2</van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="已完成">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Col, Row, Cell, CellGroup, Tab, Tabs, NavBar }from 'vant'
import OrderList from '@/components/OrderList.vue'

export default {
  name:'AdressInConfirmOrder',

  components:{
    [Col.name]:Col,
    [Row.name]:Row,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [NavBar.name]:NavBar,
    ['order-list']: OrderList
  },

  data(){
    return{
      title:[]
    }
  },

  methods:{
     onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>