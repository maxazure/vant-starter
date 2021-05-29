<template>
  <div>
    <van-row style="margin-top:4.28rem;" type="flex" justify="center">
      <van-col span="18">
        <div style="font-size:28px">密码登录</div>
      </van-col>
    </van-row>
    <van-row style="margin-top:4.42rem" type="flex" justify="center">
      <van-col span="18">
        <van-field style="padding:1%;font-size:16px" v-model="value.username" type="tel" placeholder="请输入手机号码">
          <template #label>
            {{prefix}}<van-icon @click="showpicker = !showpicker" style="display:inline-block;vertical-align:middle" name="arrow-down"/>
          </template>
        </van-field>
      </van-col>
    </van-row>
    <van-row style="margin-top:1.78rem;" type="flex" justify="center">
      <van-col span="18">
        <van-field style="padding:1%;font-size:16px" v-model="value.password" label="密码" placeholder="请输入密码" />
      </van-col>
    </van-row>
    <van-row style="margin-top:3.35rem" type="flex" justify="center">
      <van-col span="18">
        <van-button style="width:100%;" type="info" @click="Login">登录</van-button>
      </van-col>
    </van-row>
    <van-row style="margin-top:1.21rem" type="flex" justify="center">
      <van-col span="18">
        <div style="color:#1989fa;display:flex;justify-content:space-between">
          <div @click="QuickLogin">手机快捷登录</div>
          <div @click="LostPassword">忘记密码？</div>
        </div>
      </van-col>
    </van-row>
    <van-row style="margin-top:4.45rem" type="flex" justify="center">
      <van-col span="18">
        <div style="color:#1989fa;display:flex;justify-content:center">
          <div @click="Register">新用户注册</div>
        </div>
      </van-col>
    </van-row>
    <van-popup  position="bottom" style="height:50%" round v-model="showpicker">
      <van-picker :columns="columns" @change='pickerselected'/>
    </van-popup>
  </div>
</template>

<script>
import { Field, Button, Icon, Picker, Popup } from 'vant'

export default {
  name:'Login',
  components:{
    [Field.name]:Field,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [Picker.name]:Picker,
    [Popup.name]:Popup
  },

  data(){
    return{
      value:{username:"123456789",password:"test"},
      prefix:'+86',
      showpicker: false,
      columns: ['+87', '+88', '+96', '+32', '+34', '+54', '+46', '+43']
    }
  },

  methods:{
    pickerselected(picker,value){
      this.prefix = value
    },

    QuickLogin(){
      this.$router.push({name:'QuickLogin'})
    },

    LostPassword(){
      this.$router.push({name:'LostPassword'})
    },

    Register(){
      this.$router.push({name:'Register'})
    },

    async Login(){
      await this.$store.dispatch('user/login', this.value)
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>

</style>