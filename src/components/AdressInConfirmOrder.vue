<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell clickable is-link center>
          <template #title>
            <van-row>
              <van-col>
                张三
              </van-col>
              <van-col>
                13000000000
              </van-col>
              <van-col style="background:#FF4444;color:white">
                默认
              </van-col>
            </van-row>
            <van-row>
              浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室
            </van-row>
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
import { RadioGroup, Radio, Cell, CellGroup }from 'vant'

export default {
  name:'AdressInConfirmOrder',

  components:{
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