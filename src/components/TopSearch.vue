<template>
  <div class="search" ref="search">
    <input type="text" class="input" placeholder="Search..." />
    <button class="btn">
      <Search />
    </button>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.search {
  position: relative;
  margin: 0 auto 20px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #ccc solid;
    display: block;
    width: 200px;
    padding: 15px 0;
    font-size: 18px;
    color: #000;
    &:focus {
      outline: none;
    }
  }
  label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
    span {
      display: inline-block;
      font-size: 18px;
      min-width: 5px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  .btn {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    font-size: 24px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    &:focus {
      outline: none;
    }
  }
}
</style>
