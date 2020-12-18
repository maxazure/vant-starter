<template>
  <div>

    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
      <template #title>
        搜索：{{$route.query.product_name}}
      </template>
    </van-nav-bar>

    <div class="pro-container">
        <product-list-item :product="item" v-for="item in SearchResult" :key="item.id" />
    </div>

  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem.vue";
import { Search} from "@/api/product";
import { NavBar } from 'vant';

export default {

  name:'HomeSearch',

  components:{
    [NavBar.name]:NavBar,
    ["product-list-item"]:ProductListItem
  },

  data(){
    return{
      SearchResult:[]
    }
  },

  methods: {

    async Search(product_name){
      const response = await Search(product_name);
      this.SearchResult = response.data;
      console.log(this.SearchResult);
    },

    onClickLeft(){
      this.$router.go(-1)
    }
  },

  created(){
    this.Search(this.$route.query.product_name)
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