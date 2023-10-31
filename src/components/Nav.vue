<template>
  <div class="nav-container">
    <el-menu
      router
      :default-active="activeIndex ? this.$route.path : ''"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="width: 100%"
      background-color="transparent"
    >
      <img class="logo" src="/img/logo.png" @click="gotohome" alt="" />
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/show">展览</el-menu-item>
      <el-menu-item index="/custom">定制</el-menu-item>
      <el-menu-item index="/educate">非遗文化录入</el-menu-item>
      <el-menu-item index="/educate2">赏析</el-menu-item>
      <el-menu-item index="/travel">旅游</el-menu-item>
      <el-sub-menu
        index="9"
        style="position: absolute; right: 10px; height: 50px"
      >
        <template #title
          ><el-icon><User /></el-icon
        ></template>
        <el-menu-item index="/login" style="color: #000; background-color: #fff"
          >登录</el-menu-item
        >
        <el-menu-item
          index="/register"
          style="color: #000; background-color: #fff"
          >注册</el-menu-item
        >
      </el-sub-menu>
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
  position: fixed;
  top: 0;
  width: 100%;
  // background-color: #fff;
  background: rgba(255, 255, 255, 0.7);
  z-index: 999;
  .el-menu {
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    .el-menu-item {
      font-size: 16px;
    }
    .logo {
      position: absolute;
      left: 30px;
      height: 40px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 999;
    }
    .logo:hover {
      cursor: pointer;
    }
  }
}
</style>
