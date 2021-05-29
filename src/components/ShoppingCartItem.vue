<template>
  <div>

    <div v-for="(item1,index1) in List" :key="index1" style="padding:10px">

      <van-row class="row">
        <van-col>
          <van-checkbox shape="square" :name="item1.brand" @click="checkAll(item1.brand)"></van-checkbox>
        </van-col>
        <span class="span">
          {{item1.brand}}
        </span>
      </van-row>
      
      <van-row v-if="item1.promotion" class="row" style="display:flex;align-items:center">
        <van-tag plain color="#EC3A23">活动</van-tag>
        <span class="span">
          {{item1.promotion}}
        </span>
      </van-row>

      <shopping-cart-item-inner :List="item1.items" :ref="item1.brand"></shopping-cart-item-inner>


    </div>

  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, Tag, Cell, Button,Image as VanImage } from 'vant';
import ShoppingCartItemInner from '@/components/ShoppingCartItemInner.vue'

export default {

  name:'ShoppingCartItem',

  components:{
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Tag.name]:Tag,
    [Cell.name]:Cell,
    [Button.name]:Button,
    [VanImage.name]:VanImage,
    ['shopping-cart-item-inner']:ShoppingCartItemInner
  },  

  props:{
    List:Array,
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

    ItemsSelected:{
      handler(val){
        console.log(val);
      }
    },

    AllChecked:{
      handler(){
        this.List.forEach(val => this.$refs[val.brand][0].CheckAll = !this.$refs[val.brand][0].CheckAll)
      }
    }
  },

  methods: {
    checkAll(checkboxgroup) {
      this.$refs[checkboxgroup][0].CheckAll = !this.$refs[checkboxgroup][0].CheckAll
      console.log(this.$refs[checkboxgroup][0].CheckAll);
    },

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
.row{
  margin-bottom: 0.625rem;
}

.span{
  margin-left:0.625rem;
}

.goodcard{
  margin-top: 1.25rem;
  margin-left: 1rem;
}

.goodname{
  font-size: 12px;
  font-weight: bold;
}

.count-button{
  background: #f3f3f3;
}

.original-price{
  color:black;
  font-size:10px;
  margin-left:0.3rem;
}

.price{
  font-size: 12px;
}

</style>