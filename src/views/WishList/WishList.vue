<template>
  <div>
    <van-nav-bar title="心愿单"/>
    <van-tabs v-model="active">
      <van-tab title="商品收藏">
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
            <span class="span">
              {{item1.promotion}}
            </span>
          </van-row>
      
          <van-row v-for="(item2,index2) in item1.items" :key="index2" gutter="8" class="row goodcard" style="display:flex;align-items:center">
            <van-col>
              <van-checkbox shape="square" :name="item2.cartitem_id"></van-checkbox>
            </van-col>
            <van-col>
              <van-image :src="item2.photo" width="80" height="110"></van-image>
            </van-col>
            <van-col style="width:100%">
              <van-row class="goodname row">
                {{item2.name}}
              </van-row>
              <van-row>¥ 269.90</van-row>
              <van-row><van-button>商品详情</van-button></van-row>
            </van-col>
          </van-row>

        </van-checkbox-group>

        <van-goods-action style="position:fixed;bottom:50px">
          <van-goods-action-button style="width:100px;height:40px" text="加入购物车" @click="onClickButton"/>
        </van-goods-action>

      </van-tab>


      <van-tab title="浏览足迹">
        <van-row class="layout">
          <van-row class="date">4月4日</van-row>
          <div class="imageblock">
            <van-image width="7.75rem" height="10.37rem" fit="cover" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
            <van-row class="blockspace">美特斯邦威</van-row>
            <van-row class="blockspace" type='flex' justify='space-between'>
              <van-button size="mini">限时折扣</van-button>
              <van-col style="line-height:24px">￥169.90</van-col>
            </van-row>
          </div>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar,Tab, Tabs, Image as VanImage, Button, Checkbox, CheckboxGroup, GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant';


export default {
  name:'WishList',

  components:{
    [NavBar.name]:NavBar,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [VanImage.name]:VanImage,
    [Button.name]:Button,
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup,
    [GoodsAction.name]:GoodsAction,
    [GoodsActionIcon.name]:GoodsActionIcon,
    [GoodsActionButton.name]:GoodsActionButton
  },

  data(){
    return{
      active:1
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

.layout{
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.date{
  margin-top: 1.375rem;
  margin-bottom: 1.375rem;
}

.imageblock{
  width: 7.75rem;
  font-size: 0.875rem;
  border: solid 1px #797979;
}

.blockspace{
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

</style>