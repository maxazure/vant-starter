<template>
  <div>
    <div style="display:flex;justify-content:center;margin-top:15%">
      <van-image round></van-image>
    </div>
    <van-row style="display:flex;flex-direction:column;align-items:center">
      <van-image round fit="cover" width="60px" height="60px" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
      <div style="margin:5px">{{me.username}}</div>
      <div style="margin:5px">{{me.intro}}</div>
    </van-row>
    <van-cell-group style="margin-top:10%">
      <van-cell clickable is-link center :to="{name:'MyOrder',query:{page_name:'全部订单'}}">
        <template #title>全部订单</template>
      </van-cell>
      <van-cell clickable is-link center :to="{name:'MyAddress',query:{page_name:'我的地址'}}">
        <template #title>我的地址</template>
      </van-cell>
      <van-cell clickable is-link center :to="{name:'RevisePersonalInfo',query:{page_name:'修改个人信息'}}">
        <template #title>修改个人信息</template>
      </van-cell>
      <van-button @click="click">
        退出登录
      </van-button>
      
    </van-cell-group>
  </div>
</template>

<script>
import { CellGroup, Cell, Image as VanImage, Button} from 'vant';
import { getInfo } from '@/api/user.js'

export default {
  name:'Me',
  components:{
    [CellGroup.name]:CellGroup,
    [Cell.name]:Cell,
    [VanImage.name]:VanImage,
    [Button.name]:Button
  },

  data(){
    return{
      me:{}
    }
  },

  methods:{
    async getInfo(){
      const response = await getInfo()
      this.me = response.data
      console.log(this.content);
    },

    async click(){
      await this.$store.dispatch('user/logout')
      this.$router.go(0)
    }
  },

  created(){
    this.getInfo()
  }
  
}
</script>

<style scoped>

</style>