<template>
  <div>
    <van-checkbox-group v-model="CartListSelected" @change="CartListChange">
      <div style="display:flex" v-for="item in CartList" :key="item.id">
        <van-checkbox class="checkbox" :name="item.product_id"></van-checkbox>
        <van-card class="van-card" :num="item.quantity" :price="item.price" :title="item.name" :thumb="item.photo"/>
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

  model:{
    event: 'change'
  },

  props:['value','CartList'],

  data(){
    return{
      CartListSelected:this.value
    }
  },

  watch:{
    value:{
      handler(val){
        this.CartListSelected = val
      }
    }
  },

  methods: {
    CartListChange(){
      this.$emit('change',this.CartListSelected)
    }
  }   
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