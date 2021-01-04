<template>
  <div>

    <van-search v-model="search" placeholder="请输入搜索关键词"></van-search>

    <van-sidebar v-model="activeKey" style="height:100%">
      <van-sidebar-item v-for="item in Categories" :key="item.id" :title="item.name">
      </van-sidebar-item>
    </van-sidebar>

    <div style="position:absolute;top:54px;left:80px;">
      <div v-for="(item1, index1) in subcategories" :key='index1'>
        <van-divider>{{item1.name}}</van-divider>
        <div style="display:flex;justify-content:space-between">
          <product-list-item v-for="item2 in item1.products" :key="item2.id" :product="item2"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Search, getCategory } from "@/api/product";
import { Search as VanSearch, Sidebar, SidebarItem,Divider } from 'vant';
import ProductListItem from '@/components/ProductListItem';


export default {

  name:'ProductCategory',

  components:{
    [VanSearch.name]:VanSearch,
    [Sidebar.name]:Sidebar,
    [SidebarItem.name]:SidebarItem,
    [Divider.name]:Divider,
    ['product-list-item']: ProductListItem
  },

  data(){
    return{
      search:'',
      Categories:[],
      subcategories:[],
      activeKey:0
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