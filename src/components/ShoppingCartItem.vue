<template>
  <div>
    <van-checkbox-group v-model="ItemsSelected" @change="ListChange" ref="CheckboxGroup">
        <van-row v-for="(item,key) in ItemList" :key="key" style="display:flex;align-items:center">
          <van-col :span='2'>
            <van-checkbox v-if="Radio" class="checkbox" :name="item.cart_item_id"></van-checkbox>
          </van-col>
          <van-col :span='22'>
            <van-card :num="item.quantity" :price="item.price" :title="item.name" :thumb="item.photo">
              <template #tags>
                <div style="display:inline-block">已选择：</div>
                <van-tag plain type="danger" style="margin-right:5px">{{item.color_name}}</van-tag>
                <van-tag plain type="danger">{{item.size_name}}码</van-tag>
              </template>
            </van-card>
          </van-col>
        </van-row>
    </van-checkbox-group>
  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, Tag } from 'vant';

export default {

  name:'ShoppingCartItem',

  components:{
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Tag.name]:Tag
  },

  props:{
    List: Array,
    Radio: {
      type: Boolean,
      default: true
    },
    AllChecked:Boolean
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
    },

    AllChecked:{
      handler(val){
        if(val){
          this.$refs.CheckboxGroup.toggleAll(true)
        }
        else{
          this.$refs.CheckboxGroup.toggleAll()
        }
      }
    }
  },

  methods: {
    ListChange(){
      if (this.ItemsSelected){
        let List = []
        Object.values(this.ItemsSelected).forEach((item, key) => {
          let newItem = {}
          newItem["size_id"] = this.ItemList[key].size_id
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
  margin-left: 5px;
  margin-right: 5px;
}

.van-card{
  float: right;
  width: 100%;
}

</style>