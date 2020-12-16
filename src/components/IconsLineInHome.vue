<template>
  <van-grid>
      <van-grid-item v-for="item in IconsLine" :key="item.id" :url="item.link">
        <template  #icon >
          <van-icon name="gem-o" color="red" />
        </template>
        <template  #text >
          <span>会员</span>
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