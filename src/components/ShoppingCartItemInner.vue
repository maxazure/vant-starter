<template>
  <van-checkbox-group v-model="ItemsSelected" ref="checkboxGroup">
      
        <van-row v-for="(item1,index1) in List" :key="index1" gutter="8" class="row goodcard" style="display:flex;align-items:center">
          <van-col>
            <van-checkbox shape="square" :name="item1.cartitem_id"></van-checkbox>
          </van-col>
          <van-col>
            <van-image :src="item1.photo" width="80" height="110"></van-image>
          </van-col>
          <van-col style="width:100%">
            <van-row class="goodname row">
              {{item1.name}}
            </van-row>
            <van-row class="row">
              <van-cell style=" padding-top:0px;padding-bottom:0px;border:#B0B0B0 solid 1px;border-radius:10px" :value="`${item1.color_name}  ${item1.size_name}`" is-link arrow-direction="down"></van-cell>
            </van-row>
            <van-row class="row">
              <span style="text-decoration:line-through;color:#FF4444"><span class="original-price">吊牌价:￥{{item1.price}}</span></span>
            </van-row>
            <van-row type="flex" justify="space-between">
              <van-col>
                <van-button class="price" round color="#EC3A23" size="mini">优惠后 ￥{{item1.after_discount}}</van-button>
              </van-col>
              <van-col>
                <van-button class="count-button" icon="minus" size="mini"></van-button>
                <van-button class="count-button" size="mini" style="width:30px">{{item1.quantity}}</van-button>
                <van-button class="count-button" icon="plus" size="mini"></van-button>
              </van-col>
            </van-row>
          </van-col>
        </van-row>

      </van-checkbox-group>
</template>

<script>
import { Checkbox, CheckboxGroup, Cell, Button,Image as VanImage } from 'vant';

export default {
  name:'ShoppingCartItem',

  components:{
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Cell.name]:Cell,
    [Button.name]:Button,
    [VanImage.name]:VanImage
  },

  props:{
    List:Array
  },

  
  data(){
    return{
      ItemsSelected:[],
      CheckAll:false
    }
  },

  watch:{
    CheckAll:{
      handler(val){
        if(val){
           this.$refs.checkboxGroup.toggleAll(true);
        }
        else{
          this.$refs.checkboxGroup.toggleAll();
        }
      }
    }
  }
}
</script>

<style scoped>

.row{
  margin-bottom: 0.625rem;
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