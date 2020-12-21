<template>
  <div style="display:flex;flex-direction:column">
    <div style="margin-top:50px;margin-left:15px;font-size:25px">注册</div>
     <van-field style="margin-top:50px" v-model="value" type="tel" placeholder="请输入手机号码">
       <template #label>
         {{prefix}}<van-icon @click="showpicker = !showpicker" style="display:inline-block;vertical-align:middle" name="arrow-down"/>
       </template>
     </van-field>
     <van-field v-model="value" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="info" plain>发送验证码</van-button>
      </template>
     </van-field>
     <van-field v-model="value" label="设置密码" placeholder="请输入密码" />
     <van-button  style="width:80%;margin-top:30px;align-self:center;" type="info" >同意协议并注册</van-button>
     <van-button  style="width:80%;margin-top:20px;align-self:center;" type="info" plain >已有账号立即登陆</van-button>
     <van-popup  position="bottom" style="height:50%" round v-model="showpicker">
      <van-picker :columns="columns" @change='pickerselected'/>
    </van-popup>
  </div>
</template>

<script>
import { Field, Button, Icon, Picker, Popup } from 'vant'
export default {
  name:'Register',
  components:{
    [Field.name]:Field,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [Picker.name]:Picker,
    [Popup.name]:Popup
  },
  data(){
    return{
      value:'',
      prefix:'+86',
      showpicker: false,
      columns: ['+87', '+88', '+96', '+32', '+34', '+54', '+46', '+43']
    }
  },
  methods:{
    pickerselected(picker,value){
      this.prefix = value
    }
  }
  
}
</script>

<style scoped>

</style>