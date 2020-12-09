<template>
  <el-container>
    <el-header>
      <h1>WORKLOG</h1>
      <navbar />

      <div class="line"></div>
    </el-header>
    <el-container>
      <el-main> <router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import { Navbar } from "./components";

export default {
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>

<style>
html,
body,
#app,
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
}
.el-header h1 {
  margin: 0;
  line-height: 60px;
  padding: 0;
  width: 440px;
}
.el-main {
  background-color: #e9eef3;
}
</style>
