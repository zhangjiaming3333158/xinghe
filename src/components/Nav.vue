<template>
  <div class="nav-container">
    <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="width: 100%;" background-color="transparent">
      <img src="@/assets/logo.png" alt="" style="width: 50px;height: 60px;position: absolute;top: 0;left: 40px;">
      <el-menu-item style="width: 450px;cursor: default;" disabled></el-menu-item>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/show">展览</el-menu-item>
      <el-menu-item index="/custom">定制</el-menu-item>
      <el-menu-item index="4">教育</el-menu-item>
      <el-menu-item index="5">体验店</el-menu-item>
      <el-menu-item index="6">旅游</el-menu-item>
      <el-menu-item index="7">文创</el-menu-item>
      <el-menu-item index="8">关于</el-menu-item>
      <el-submenu index="9" style="position: absolute;right: 10px;">
        <template slot="title"><i class="el-icon-user"></i></template>
        <el-menu-item index="/login" style="color: #fff;">登录</el-menu-item>
        <el-menu-item index="/register" style="color: #fff;">注册</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key
    },
  },
  mounted() {
    // console.log(this.$route);
  },
}
</script>

<style lang="less" scoped>
.el-menu {
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}
.nav-container {
  width: 100%;
}
</style>