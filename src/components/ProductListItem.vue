<template>
  <div>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="two-columns">

      <div v-for="(item,key) in ProductList" :key="key" style="width:50%" @click="click(item.id)">
        <van-image :src="item.photo"></van-image>
        
        <div class="title">{{item.name}}</div>
        <div class="desc">{{item.intro}}</div>
        <div class="price-container">
          <div v-if="item.price" class="price-off" :style="priceStyle">￥{{item.price}}</div>
          <div :class="item.price? 'market-price':'price'" :style="priceStyle">￥{{item.market_price}}</div>
          <div v-if="item.price" class="priceoff-box">限时折扣</div>
        </div>
      </div>

    </van-list>

  </div>
</template>

<script>
import { Image as VanImage, Button, List } from 'vant';

export default {
  components:{
    [Button.name]: Button,
    [VanImage.name]: VanImage,
    [List.name]:List
  },

  data(){
    return{
      loading: false,
      finished: false,
      currentpage: 0
    }
  },

  computed: {
    priceStyle () {
      return 'color:' + this.priceColor;
    }
  },
  name: 'product-list-item',
  props: ["ProductList", "imgSize", "priceColor"],

  methods: {
    click(product_id){
      this.$router.push({name:'ProductDetail',query:{product_id:product_id}})
    },

    onLoad(){0
      this.currentpage += 1
      this.$emit('pulldown',this.currentpage)
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.two-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.title,  .desc,  .price-container{
    padding: 0 6px;
}

.title{
  font-size: 14px;
  line-height: 150%;
  color: #333;
  text-decoration: none;
}

.desc{
  font-size: 12px;
  line-height: 200%;
  color: #999;
}

.price-container{
  clear: both;
}

.price-off{
  line-height: 30px;
  font-size: 16px;
  color: #FF6010;
  font-weight: bold;
  float: left;
}

.price{
  line-height: 30px;
  font-size: 16px;
  font-weight: bold;
  float: left;
}

.market-price{
  text-decoration: line-through;
  margin-left:3px;
  line-height: 30px;
  font-size: 12px;
  color:#929292;
  float: left;
}

.priceoff-box{
  float: right;
  margin-right: 10px;
  width: 60px;
  height: 20px;
  background: #FFECE3;
  font-size: 12px;
  color: #FF6010;
  line-height: 20px;
  text-align: center;
}

</style>
