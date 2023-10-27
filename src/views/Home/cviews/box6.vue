<template>
  <div class="box3_2_right">
    <img
      style="border-radius: 10px"
      src="@/views/Home/img/box3_2_right_top.jpeg"
      alt=""
      class="box3_2_right_top"
    />
    <img
      style="border-radius: 10px"
      src="@/views/Home/img/box3_2_right_bottom.jpeg"
      alt=""
      class="box3_2_right_bottom"
    />
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.box3_2_right {
  float: left;
  width: 423px;
  height: 420px;
  .box3_2_right_top {
    margin-bottom: 1px;
    width: 424px;
    height: 209px;
    background-color: green;
  }
  .box3_2_right_bottom {
    // float: left;
    margin-top: 1px;
    width: 424px;
    height: 209px;
    background-color: yellow;
  }
}
</style>
