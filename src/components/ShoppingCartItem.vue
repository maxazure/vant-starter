<template>
  <div>
    <!-- <van-checkbox-group v-model="ItemsSelected" @change="ListChange" ref="CheckboxGroup">
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
    </van-checkbox-group> -->
    
    <van-checkbox-group v-for="(item1,index1) in List" :key="index1" v-model="ItemsSelected" style="position:absolute;left:10px;right:10px">

      <van-row class="row">
        <van-col>
          <van-checkbox shape="square" :name="item1.brand"></van-checkbox>
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
      
      <van-row v-for="(item2,index2) in item1.items" :key="index2" gutter="8" class="row goodcard" style="display:flex;align-items:center">
        <van-col>
          <van-checkbox shape="square" :name="item2.cartitem_id"></van-checkbox>
        </van-col>
        <van-col>
          <van-image :src="item2.photo" width="95" height="130"></van-image>
        </van-col>
        <van-col>
          <van-row class="goodname row">
            {{item2.name}}
          </van-row>
          <van-row class="row">
            <van-cell style="width:208px;padding-top:0px;padding-bottom:0px;border:#B0B0B0 solid 1px;border-radius:10px" :value="`${item2.color_name}  ${item2.size_name}`" is-link arrow-direction="down"></van-cell>
          </van-row>
          <van-row class="row" style="display:flex;align-items:center">
            <span style="font-size:12px">件数：</span>
            <van-button class="count-button" icon="minus" size="mini"></van-button>
            <van-button class="count-button" size="mini" style="width:30px">{{item2.quantity}}</van-button>
            <van-button class="count-button" icon="plus" size="mini"></van-button>
          </van-row>
          <van-row style="display:flex;align-items:center">
            <span class="original-price" style="line-height:32px">￥256</span>
            <van-button class="price" round color="#EC3A23" size="mini" style="position:absolute;right:0px">优惠后 ￥233.90</van-button>
          </van-row>
        </van-col>
      </van-row>

    </van-checkbox-group>
  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, Tag, Cell, Button,Image as VanImage } from 'vant';

export default {

  name:'ShoppingCartItem',

  components:{
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Tag.name]:Tag,
    [Cell.name]:Cell,
    [Button.name]:Button,
    [VanImage.name]:VanImage
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
.row{
  margin-bottom: 10px;
}

.span{
  margin-left: 10px;
}

.goodcard{
  margin-top: 40px;
  margin-left: 15px;
}

.goodname{
  font-size: 12px;
}

.count-button{
  background: #f3f3f3;
}

.original-price{
  font-size: 14px;
}

.price{
  font-size: 14px;
}

</style>