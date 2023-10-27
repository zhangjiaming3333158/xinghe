<template>
  <div class="search">
    <div class="search_content">
      <el-input
        style="width: 200px"
        clearable
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary" style="width: 100px; height: 40px"
        >搜索</el-button
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.search {
  width: 100%;
  height: 90px;
  .search_content {
    width: 590px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-input {
      width: 200px;
      display: block;
    }
    .el-button {
      width: 100px;
      display: block;
    }
  }
}
</style>
