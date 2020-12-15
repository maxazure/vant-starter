<template>
  <div style="background-color:#797979">
    <van-cell-group>
      <van-cell v-for="(item,index) in title" :key="index" clickable is-link center>
        <template #title>
          {{item}}
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Col, Row, Cell, CellGroup }from 'vant'

export default {
  name:'AdressInConfirmOrder',

  components:{
    [Col.name]:Col,
    [Row.name]:Row,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
  },

  data(){
    return{
      title:['头像','昵称','性别','生日','所在地','简介','学校','公司']
    }
  },

  methods:{}
}
</script>

<style scoped>

</style>