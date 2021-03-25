<template>
  <div>
    <van-row style="margin-top:4.28rem;" type="flex" justify="center">
      <van-col span="18">
        <div style="font-size:28px">找回密码</div>
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
        <van-field style="padding:1%;font-size:16px" v-model="value" center clearable label="验证码" placeholder="请输入短信验证码">
          <template #button>
            <van-button size="mini" type="info" plain>发送验证码</van-button>
          </template>
        </van-field>
      </van-col>
    </van-row>
    <van-row style="margin-top:1.5rem" type="flex" justify="center">
      <van-col span="18">
        <van-field style="padding:1%;font-size:16px" v-model="value" label="新密码" placeholder="请输入密码" />
      </van-col>
    </van-row>
    <van-row style="margin-top:1.5rem" type="flex" justify="center">
      <van-col span="18">
        <van-field style="padding:1%;font-size:16px" v-model="value" label="确认密码" placeholder="请再次确认密码" />
      </van-col>
    </van-row>
    <van-row style="margin-top:1.92rem" type="flex" justify="center">
      <van-col span="18">
        <van-button style="width:100%;align-self:center;" type="info" @click="submit">确定</van-button>
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
  name:'LostPassword',
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
    
    submit(){
      this.$router.push({name:'SignIn'})
    }
  }
  
}
</script>

<style scoped>

</style>