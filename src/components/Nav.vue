<template>
  <div class="nav-container">
    <el-menu router :default-active="activeIndex?this.$route.path:''" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="width: 100%;" background-color="transparent">
      <img class="logo" src="/img/logo.png" @click="gotohome" alt="">
      <el-menu-item style="width: 500px;cursor: default;" disabled></el-menu-item>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/show">展览</el-menu-item>
      <el-menu-item index="/custom">定制</el-menu-item>
      <el-menu-item index="/educate">非遗文化录入</el-menu-item>
      <el-menu-item index="/educate2">赏析</el-menu-item>
      <el-menu-item index="/travel">旅游</el-menu-item>
      <!-- <el-menu-item index="/show3d">展览3d</el-menu-item> -->
      <el-submenu index="9" style="position: absolute;right: 10px;">
        <template slot="title"><i class="el-icon-user"></i></template>
        <el-menu-item index="/login" style="color: #000;background-color: #fff;">登录</el-menu-item>
        <el-menu-item index="/register" style="color: #000;background-color: #fff;">注册</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      activeIndex: '',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key
    },
    gotohome() {
      ;(this.activeIndex = '/'), this.$router.push('/')
    },
  },
  mounted() {
    this.activeIndex = this.$route.path
  },
  watch: {
    activeIndex(newVal, oldVal) {
      // console.log(newVal,oldVal);
    },
  },
}
</script>

<style lang="less" scoped>
.nav-container {
  width: 100%;
  .el-menu {
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    .el-menu-item{
      font-size: 16px;
    }
    .logo {
      width: 250px;
      height: 50px;
      position: absolute;
      top: 5px;
      left: 40px;
      z-index: 999;
    }
    .logo:hover {
      cursor: pointer;
    }
  }
}
</style>