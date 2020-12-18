<template>
  <div>

    <van-search v-model="search" placeholder="请输入搜索关键词"></van-search>

    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="item in Sidebar" :key="item.id" :title="item.name" />
    </van-sidebar>

  </div>
</template>

<script>
import { Search, getCategory } from "@/api/product";
import { Search as VanSearch, Sidebar, SidebarItem } from 'vant';

export default {

  name:'ProductCategory',

  components:{
    [VanSearch.name]:VanSearch,
    [Sidebar.name]:Sidebar,
    [SidebarItem.name]:SidebarItem
  },

  data(){
    return{
      search:'',
      Sidebar:[],
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
      console.log(response);
      this.Sidebar = response.data.list
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