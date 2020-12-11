<template>
  <div>
    <van-checkbox-group v-model="CartList">
      <div style="display:flex">
        <van-checkbox class="checkbox" name="a"></van-checkbox>
        <van-card class="van-card" num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg"/>
      </div>
    </van-checkbox-group>
  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup } from 'vant';


export default {

  name:'ShoppingCartItem',

  components:{
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },

  data(){
    return{
      CartList:[]
    }
  },

  methods: {},

  created(){}
}
</script>

<style scoped>
.checkbox{
  display: inline-block;
  align-self: center;
}

.van-card{
  float: right;
  width: 94%;
  align-self: center;
}

</style>