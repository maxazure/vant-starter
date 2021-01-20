<template>
  <div>
    <van-nav-bar title="商品列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-divider>{{this.$route.query.CategoryName}}</van-divider>
    <div class="list-container">
      <product-list-item v-for="(item,key) in ProductList" :key="key" :product="item"/>
    </div>

  </div>
</template>

<script>
import { NavBar,Divider} from 'vant'
import ProductListItem from '@/components/ProductListItem.vue'
import { getProductListById } from '@/api/product.js'

export default {
  components:{
    [NavBar.name]:NavBar,
    [Divider.name]:Divider,
    ['product-list-item']: ProductListItem
  },

  data(){
    return{
      ProductList:[]
    }
  },
  
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },

    async getProductListById(){
      const response = await getProductListById(this.$route.query.CategoryId)
      this.ProductList = response.data
    }
  },

  created(){
    this.getProductListById()
  }
  
}
</script>

<style scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>