<template>
  <div>
    <div class="search" :class="{ show: this.y > this.scrollY }">
      <div class="search_content">
        <el-input v-model="input" placeholder="请输入内容" clearable style="width: 200px"></el-input>
        <el-button type="primary" style="width: 100px; height: 40px"
          >搜索</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFix',
  data() {
    return {
      input: '',
      y: 0,
    }
  },
  props: ['scrollY'],
  computed: {},
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.y = scrollTop
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {},
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 9px;
  z-index: 999;
  background-color: #fff;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .search_content {
    width: 590px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-input {
      width: 400px;
      display: block;
    }
    .el-button {
      width: 100px;
      display: block;
    }
  }
}
</style>
