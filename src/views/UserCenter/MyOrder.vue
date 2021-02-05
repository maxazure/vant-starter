<template>
  <div>
    <van-nav-bar :title="$route.query.page_name" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- <van-tabs>
      <van-tab title="选购单">
        <order-list></order-list>
      </van-tab>
      <van-tab title="确认单">
        <order-list></order-list>
      </van-tab>
    </van-tabs> -->
    <order-list></order-list>
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
    }
  },

  methods:{
     onClickLeft(){
      this.$router.push({name:'Me'})
    }
  }
}
</script>

<style scoped>

</style>