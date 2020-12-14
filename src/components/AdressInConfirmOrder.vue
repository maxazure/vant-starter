<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell clickable is-link center>
          <template #title>
            <van-row>
              <vam-col>
                张三
              </vam-col>
              <vam-col>
                13000000000
              </vam-col>
              <vam-col style="background:#FF4444;color:white">
                默认
              </vam-col>
            </van-row>
            <vam-row>
              浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室
            </vam-row>
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
import { Col, Row, RadioGroup, Radio, Cell, CellGroup }from 'vant'

export default {
  name:'AdressInConfirmOrder',

  components:{
    [Col.name]:Col,
    [Row.name]:Row,
    [RadioGroup.name]:RadioGroup,
    [Radio.name]:Radio,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
  },

  data(){
    return{
      radio:''
    }
  },

  methods:{}
}
</script>

<style scoped>

</style>