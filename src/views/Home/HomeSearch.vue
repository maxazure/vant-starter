<template>
  <div class="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <div class="pro-container">
        <product-list-item :product="item" v-for="item in ItemList" :key="item.id" />
    </div>

  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem";
import {getProductListForHome} from "@/api/product";
import { Search } from 'vant';

export default {

  name:'HomeSearch',

  components:{
    [Search.name]: Search,
    ["product-list-item"]:ProductListItem
  },

  data(){
    return{
      ItemList:[]
    }
  },

  methods: {
    async getProductList(id){
      const response = await getProductListForHome(id);
      this.ItemList = response.data;
    }
  },

  created(){
    this.getProductList(1)
  }
}
</script>

<style scoped>
.pro-container{
  /* overflow: hidden; */
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>