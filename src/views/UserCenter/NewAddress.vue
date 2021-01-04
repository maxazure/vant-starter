<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
  </div>
</template>

<script>
import { AddressEdit,NavBar } from 'vant'

export default {
  components:{
    [AddressEdit.name]:AddressEdit,
    [NavBar.name]:NavBar
  },

   data() {
    return {
      areaList:[],
      searchResult: [],
    };
  },
  methods: {
    onSave() {

    },
    onDelete() {

    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
}
</script>

<style scoped>

</style>