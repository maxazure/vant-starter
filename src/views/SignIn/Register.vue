<template>
  <div>
    <van-row style="margin-top:4.28rem;" type="flex" justify="center">
      <van-col span="18">
        <div style="font-size:28px">注册</div>
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
    <van-row style="margin-top:1.78rem;" type="flex" justify="center">
      <van-col span="18">
        <van-field style="padding:1%;font-size:16px" v-model="value.password" label="密码" placeholder="请输入密码(至少6位)" />
      </van-col>
    </van-row>
    <van-row style="margin-top:3.35rem" type="flex" justify="center">
      <van-col span="18">
        <van-button style="width:100%;" type="info" @click="Register">同意协议并注册</van-button>
      </van-col>
    </van-row>
    <van-row style="margin-top:0.71rem" type="flex" justify="center">
      <van-col span="18">
        <van-button style="width:100%;" type="info" plain @click="toLogin">已有账号立即登陆</van-button>
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

    Register(){
      this.$router.push({name:'RegisterSucceed'})
    },

    toLogin(){
      this.$router.push({name:'Login'})
    }
  }
  
}
</script>

<style scoped>

</style>