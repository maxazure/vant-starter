<template>
  <div>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-address-edit
  :address-info="OldAddress"
  :area-list="areaList"
  show-postal
  :show-delete="showdelete"
  show-set-default
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
/>
  </div>
</template>

<script>
import { AddressEdit,NavBar } from 'vant'
import { addAddresses } from '@/api/Me.js';

export default {
  components:{
    [AddressEdit.name]:AddressEdit,
    [NavBar.name]:NavBar
  },

   data() {
    return {
      title: false,
      showdelete: true,
      OldAddress:{},
      areaList:{
  province_list: {
    110000: '北京市',
    120000: '天津市'
  },
  city_list: {
    110100: '北京市',
    110200: '县',
    120100: '天津市',
    120200: '县'
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    120101: '和平区',
    120102: '河东区',
    120103: '河西区',
    120104: '南开区',
    120105: '河北区'
  }
},
    }
  },

  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },

    async onSave(content) {
      let address = {}
      address["name"] = content.name
      address["tel"] = content.tel
      address["isDefault"] = content.isDefault
      address["address"] = `${content.addressDetail} ${content.country} ${content.city} ${content.province} ${content.postalCode}`
      
      await addAddresses(address)

      this.$router.push({name:"MyAddress"})
    },

    onDelete() {

    },

    ChooseNavTitle(){
      if(JSON.stringify(this.OldAddress) === "{}" ){
        this.title = "新增地址"
      }
      else{
        this.title = "修改地址"
      }
    },

    showdeletebutton(){
      if(JSON.stringify(this.OldAddress) === "{}" ){
        this.showdelete = false
      }
    },

    FillBlank(){
      if(this.$route.query.OldAddress){
        this.OldAddress = JSON.parse(this.$route.query.OldAddress)
      }
    }

  },

  created(){
    this.FillBlank()
    this.ChooseNavTitle()
    this.showdeletebutton()
  }
}
</script>

<style scoped>

</style>