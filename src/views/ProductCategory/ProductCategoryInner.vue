<template>
  <div>
    <div v-for="(item1, index1) in subcategories" :key='index1'>
      <van-divider>{{item1.name}}</van-divider>
      <div style="display:flex;justify-content:space-between">
        <product-list-item v-for="item2 in item1.products" :key="item2.id" :product="item2"/>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategory } from "@/api/product";
import { Divider } from 'vant';
import ProductListItem from '@/components/ProductListItem';

export default {
  name:'ProductCategoryInner',

  components:{
    [Divider.name]:Divider,
    ['product-list-item']: ProductListItem
  },

  data(){
   return{
      
    }
  },
  
  methods:{
    async getCategory(){
      const response = await getCategory()
      this.subcategories = response.data.categories[0].subcategories
    }
  },

  created(){
    this.getCategory()
  }
}
</script>

<style scoped>

</style>