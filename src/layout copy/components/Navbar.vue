<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
    @select="handleSelect"
  >
    <el-menu-item index="/">历史日志</el-menu-item>
    <el-menu-item index="/create-report">撰写日志</el-menu-item>
    <el-menu-item index="/settings">系统设置</el-menu-item>

    <el-submenu index="">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>{{ getUsername() }}</span>
      </template>
      
      <el-menu-item @click="logout()" index="">登出账号</el-menu-item>
      </el-submenu
    >
  </el-menu>
</template>

<script>
import { removeToken } from '@/utils/auth'
import store from '@/store'

export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout(){
      removeToken()
      this.$router.push("login")
      console.log("logout");
    },
    getUsername(){
      return store.getters.fullname
    }
  },
};
</script>

<style>
.el-menu a {
  text-decoration: none;
}
</style>