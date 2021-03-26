<template>
  <div>
    <van-row style="margin-top:4.28rem;" type="flex" justify="center">
      <van-col span="18">
        <div style="font-size:28px">手机快捷登录</div>
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
    <van-row style="margin-top:1.5rem" type="flex" justify="center">
      <van-col span="18">
        <van-field style="padding:1%;font-size:16px" v-model="value.verificationcode" center clearable label="验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="mini" type="info" plain>发送验证码</van-button>
          </template>
        </van-field>
      </van-col>
    </van-row>
    <van-row style="margin-top:3.35rem" type="flex" justify="center">
      <van-col span="18">
        <van-button style="width:100%;" type="info" @click="Login">登录</van-button>
      </van-col>
    </van-row>
    <van-row style="margin-top:0.71rem" type="flex" justify="center">
      <van-col span="18">
        <van-button style="width:100%;" type="info" plain @click="toLogin">账号密码登录</van-button>
      </van-col>
    </van-row>
    <van-row style="margin-top:3.28rem" type="flex" justify="center">
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
  name:'QuickLogin',
  components:{
    [Field.name]:Field,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [Picker.name]:Picker,
    [Popup.name]:Popup
  },

  data(){
    return{
      value:{},
      prefix:'+86',
      showpicker: false,
      columns: ['+87', '+88', '+96', '+32', '+34', '+54', '+46', '+43']
    }
  },

  methods:{
    pickerselected(picker,value){
      this.prefix = value
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