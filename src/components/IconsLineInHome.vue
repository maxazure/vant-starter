<template>
  <van-grid>
      <van-grid-item v-for="(item,key) in IconsLine" :key="key" :url="item.link">
        <template  #icon >
          <van-icon :name="item.icon"/>
        </template>
        <template  #text >
          <span>{{item.title}}</span>
        </template>
      </van-grid-item>
    </van-grid>
</template>

<script>
import { Grid, GridItem, Icon } from 'vant'

export default {
  name:'IconsLineInHome',

  components:{
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [Icon.name]:Icon
  },

  props:['IconsLine']
}
</script>

<style scoped>

</style>