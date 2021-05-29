<template>
  <div class="home">
    <van-search v-model="search" placeholder="请输入搜索关键词" @keydown.enter="Search"/>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in Swipes" :key="item.id"><van-image :src="item.image"/></van-swipe-item>
    </van-swipe>

    <icons-line-in-home :IconsLine="IconsLine"></icons-line-in-home>

    <!-- <van-divider class="divider">推荐商品</van-divider> -->

    <!-- <van-tabs v-model="active">
      <van-tab v-for="(value,index) in HomeTab" :key="index" :title="Object.values(value)[0]">
        <product-list-item :ProductList="ProductList" @pulldown="pulldown"/>
      </van-tab>
    </van-tabs> -->

    <van-icon class="iconfont" class-prefix="icon" name="viewgallery" size="50"/>
    <van-icon class="iconfont" class-prefix="icon" name="viewlist" size="50"/>

    <!-- <div style="background-color:#E4F9F8">
      <p style="margin-left:20px;padding-top:20px;color:#EC7D7D">保守穿法No.1</p>
      <van-image width="100%" height="400" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      <p style="margin-left:20px">时尚热度：这色，这款，今年上海穿得人多</p>
      <p style="margin-left:20px">着装特征：小清新，普通，大众，但有变化，显出独到匠心</p>
      <p style="margin-left:20px">着装风格：休闲</p>
      <p style="margin-left:20px">着装人设：学生妹</p>
      <p style="margin-left:20px">着装场合：通勤，上班，外出。<br>（除特隆重正装场合外）</p>
      <p style="margin-left:20px;padding-bottom:20px">搭配要点：最好白色。</p>
    </div> -->

  </div>
</template>

<script>
// import ProductListItem from '@/components/ProductListItem.vue'
import IconsLineInHome from '@/components/IconsLineInHome'
import {
  Search,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Icon,
  Tab,
  Tabs,
  Divider,
   Image as VanImage
} from 'vant'
import { getHomepageList } from '@/api/home'
import { getProductListWithPagination }  from '@/api/product'

export default {
  name: 'Home',
  components: {
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Divider.name]: Divider,
    [VanImage.name]:VanImage,
    // ['product-list-item']: ProductListItem,
    ['icons-line-in-home']: IconsLineInHome
  },

  created() {
    this.getHomepageList()
  },

  methods: {
    async getHomepageList(){
      const response = await getHomepageList()
      this.Swipes = response.data.swipes 
      this.IconsLine = response.data.buttons
      this.HomeTab = response.data.tabs
      this.getProductListWithPagination()
    },

    async getProductListWithPagination(){
      for (let x in this.HomeTab){
        this.Pagination[this.HomeTab[x]] = {product_type:'man',currentpage: 1,pagesize: 20}
        this.ProductList[this.HomeTab[x]] = await getProductListWithPagination(this.Pagination[this.HomeTab[x]])
        console.log(this.ProductList[this.HomeTab[x]]);
      }
    },

    pulldown(currentpage){
      console.log(currentpage);
    },

    Search(){
      this.$router.push({name:'HomeSearch',query:{product_name:this.search}})
    }
  },
  data() {
    return {
      value: '',
      active: 2,
      ProductList: {},
      Pagination:{},
      Swipes: [],
      IconsLine:[],
      HomeTab:{},
      search:''
    }
  }
}
</script>
<style scoped>
.my-swipe .van-swipe-item {
  height: 150px;
}

.divider {
  color: #333333;
  font-weight: bold;
  border-color: #d7d7d7;
  margin-bottom: 0;
}

</style>
