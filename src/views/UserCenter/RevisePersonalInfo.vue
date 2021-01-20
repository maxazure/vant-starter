<template>
  <div style="background-color:#797979">
    <van-nav-bar :title="$route.params.params" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-cell-group>
      <van-cell title="头像" :value="content.photo" clickable is-link center/>
      <van-cell title="昵称" :value="content.username" clickable is-link center/>
      <van-cell title="性别" :value="content.username" clickable is-link center/>
      <van-cell title="生日" :value="content.birthday" clickable is-link center/>
      <van-cell title="所在地" :value="content.region" clickable is-link center/>
      <van-cell title="简介" :value="content.intro" clickable is-link center/>
      <van-cell title="学校" :value="content.education" clickable is-link center/>
      <van-cell title="公司" :value="content.company" clickable is-link center/>
    </van-cell-group>
  </div>
</template>

<script>
import { Col, Row, Cell, CellGroup, NavBar } from 'vant'
import { getInfo } from '@/api/user.js'

export default {
  name:'AdressInConfirmOrder',

  components:{
    [Col.name]:Col,
    [Row.name]:Row,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [NavBar.name]:NavBar
  },

  data(){
    return{
      content:{}
    }
  },

  methods:{
    onClickLeft(){
       this.$router.push({name:'Me'})
    },

    async getInfo(){
      const response = await getInfo()
      this.content = response.data
      console.log(this.content);
    }
  },

  created(){
    this.getInfo()
  }
}
</script>

<style scoped>

</style>