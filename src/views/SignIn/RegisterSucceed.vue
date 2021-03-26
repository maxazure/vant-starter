<template>
  <div>
    <van-row style="margin-top:8.14rem;" type="flex" justify="center">
      <van-icon color="#1989fa" size="4.28rem" name="checked" />
    </van-row>  
    <van-row style="margin-top:2.21rem;" type="flex" justify="center">
      <div style="font-size:22px">注册成功</div>
    </van-row>
    <van-row style="margin-top:7.28rem" type="flex" justify="center">
      <van-col span="18">
        <van-button style="width:100%;" type="info" @click="toLogin">返回登录界面</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Button, Icon} from 'vant'
export default {
  name:'RegisterSucceed',
  components:{
    [Button.name]:Button,
    [Icon.name]:Icon
  },
  data(){
    return{
    }
  },
  methods:{

    toLogin(){
      this.$router.push({name:'Login'})
    }
  }
  
}
</script>

<style scoped>

</style>