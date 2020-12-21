<template>
  <div style="display:flex;flex-direction:column">
    <div style="margin-top:50px;margin-left:15px;font-size:25px">密码登录</div>
    <van-field style="margin-top:50px" v-model="value" type="tel" placeholder="请输入手机号码">
      <template #label>
        {{prefix}}<van-icon @click="showpicker = !showpicker" style="display:inline-block;vertical-align:middle" name="arrow-down"/>
       </template>
    </van-field>
    <van-field v-model="value" label="密码" placeholder="请输入手机号码" />
    <van-button style="width:80%;margin-top:30px;align-self:center;" type="info" @click="SignIn">登录</van-button>
    <div style="width:80%;align-self:center;margin-top:20px;color:#1989fa;display:flex;justify-content:space-between">
      <div>手机快捷登录</div>
      <div @click="LostPassword">忘记密码？</div>
    </div>
    <van-popup  position="bottom" style="height:50%" round v-model="showpicker">
      <van-picker :columns="columns" @change='pickerselected'/>
    </van-popup>
  </div>
</template>

<script>
import { Field, Button, Icon, Picker, Popup } from 'vant'
export default {
  name:'SignIn',
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
    },

    SignIn(){
      this.$router.push({name:'Home'})
    },

    LostPassword(){
      this.$router.push({name:'LostPassword'})
    }
  }
}
</script>

<style scoped>

</style>