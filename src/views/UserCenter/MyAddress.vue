<template>
  <div>
    <van-nav-bar :title="$route.params.params" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-address-list v-model="chosenAddressId" :list="AddressList" default-tag-text="默认" @add="onAdd" @edit="onEdit"/>
  </div>
</template>

<script>
import { AddressList,NavBar } from 'vant'

import { getAddresses } from '@/api/Me.js'

export default {
  components:{
    [AddressList.name]:AddressList,
    [NavBar.name]:NavBar
  },

  data() {
    return {
      chosenAddressId: '1',
      AddressList: []
    }
  },

  methods: {
    onClickLeft(){
       this.$router.push({name:'Me'})
    },

    onAdd(){
      this.$router.push({name:'NewAddress'})
    },

    onEdit(item){
      this.$router.push({name:'NewAddress',query:{OldAddress:JSON.stringify(item)}})
    },

    async getAddresses(){
      const response = await getAddresses()
      this.AddressList = response.data.addresses
    }
  },

  created(){
    this.getAddresses()
  }

}
</script>

<style scoped>

</style>