<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell clickable is-link center>
          <template #title>
            <van-row>
              <van-col>
                {{DefaultAddress.name}}
              </van-col>
              <van-col>
                {{DefaultAddress.tel}}
              </van-col>
              <van-col style="background:#FF4444;color:white">
                默认
              </van-col>
            </van-row>
            <van-row>
              {{`${DefaultAddress.addressDetail} ${DefaultAddress.county} ${DefaultAddress.city} ${DefaultAddress.province}`}}
            </van-row>
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
import { RadioGroup, Radio, Cell, CellGroup }from 'vant'
import { getDefaultAddress } from '@/api/Me'


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
      radio:'',
      DefaultAddress:{}
    }
  },

  methods:{
    async getDefaultAddress(){
      const response = await getDefaultAddress()
      this.DefaultAddress = response.data.default_address[0]
    }
  },

  created(){
    this.getDefaultAddress()
  }
}
</script>

<style scoped>

</style>