<template>
  <div>
    <van-checkbox-group v-model="ItemsSelected" @change="ListChange">
      <div style="display:flex" v-for="(item,key) in ItemList" :key="key">
        <van-checkbox v-if="Radio" class="checkbox" :name="item.product_id"></van-checkbox>
        <van-card :num="item.quantity" :price="item.price" :title="item.name" :thumb="item.photo">
        </van-card>
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

  props:{
    List: Array,
    Radio: {
      type: Boolean,
      default: true
    }
  },

  data(){
    return{
      ItemsSelected:[],
      ItemList: this.List
    }
  },

  watch:{
    List:{
      handler(val){
        this.ItemList = val
      }
    }
  },

  methods: {
    ListChange(){
      if (this.ItemsSelected){
        let List = []
        Object.values(this.ItemsSelected).forEach((item, key) => {
          let newItem = {}
          newItem["product_id"] = item
          newItem["quantity"] = this.ItemList[key].quantity
          List.push(newItem)
          }
        )        
        this.$emit('NewList', List)
      }
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
  width: 100%;
  align-self: center;
}

</style>