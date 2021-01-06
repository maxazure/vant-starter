<template>
  <div>

    <van-search v-model="search" placeholder="请输入搜索关键词"></van-search>

    <van-tabs v-model="active">
      <van-tab v-for="item1 in Categories" :key="item1.id" :title="item1.name" style="display:flex;justify-content:space-betweem">
        <div v-for="(item2, key2) in item1.subcategories" :key="key2" style="width:33.33%;height:180px;background:grey;display:inline-block">{{item2.name}}</div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Search, getCategory} from "@/api/product";
import { Search as VanSearch, Tab, Tabs  } from 'vant';

export default {

  name:'ProductCategory',

  components:{
    [VanSearch.name]:VanSearch,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs
  },

  data(){
    return{
      search:'',
      Categories:[],
      subcategories:[],
      active:0
    }
  },

  methods: {

    async Search(product_name){
      const response = await Search(product_name);
      this.SearchResult = response.data;
    },

    async getCategory(){
      const response = await getCategory()
      this.Categories = response.data.categories
      this.subcategories = response.data.categories[0].subcategories
    }
  },

  watch:{
    activeKey:{
      handler(val){
        this.subcategories = this.Categories[val].subcategories
      }
    }
  },

  created(){
    this.Search(this.$route.query.product_name)
    this.getCategory()
  }
}
</script>

<style scoped>
</style>