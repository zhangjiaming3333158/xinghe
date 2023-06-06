<template>
  <div>
    <div class="search" :class="{ show: this.y > this.scrollY }">
      <div class="search_content">
        <el-form>
          <el-form-item>
            <el-input style="padding-left:104px;display: inline;" v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" style="width: 100px;height: 40px;">搜索</el-button>
          </el-form-item>
        </el-form>
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
  props:['scrollY'],
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
  // height: 90px;
  position: fixed;
  left: 0;
  top: 0;
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
    // height: 90px;
    margin: auto;
    .el-form {
      width: 100%;
      height: 100%;
      margin-top: 20px;
      /deep/ .el-input__inner {
        width: 300px;
        height: 40px;
        line-height: 30px;
      }
    }
  }
}
</style>