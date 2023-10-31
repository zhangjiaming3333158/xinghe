<template>
  <div class="home-container">
    <img :src='background' alt="" class="img" />
    <div class="box1 w">
      <div class="box1_1">
        <Box1></Box1>
        <div>
          <img class="box1_1_2" src='./img/box1_1_2.png' alt="" />
        </div>
      </div>
      <div class="box1_2">
        <Box2></Box2>
        <Box3></Box3>
      </div>
    </div>
    <div class="box2 w">
      <div class="box2_1">
        <div class="box1_1_1_left">
          <img src="./img/box2_1.jpeg" alt="" />
        </div>
      </div>
      <div class="box2_2">
        <span class="span_middle">PREVIEW</span>
        <span class="span_middle2">1,071件</span>
        <!-- <img class="img_middle" src="./img/box2_1_middle.jpeg" alt="" /> -->
      </div>
      <div class="box2_3">
        <img class="img_right" src="./img/box2_1_right.jpeg" alt="" />
      </div>
    </div>
    <div class="box3 w"><Box4></Box4><Box5></Box5> <Box6></Box6></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Box1 from './cviews/box1.vue'
import Box2 from './cviews/box2.vue'
import Box3 from './cviews/box3.vue'
import Box4 from './cviews/box4.vue'
import Box5 from './cviews/box5.vue'
import Box6 from './cviews/box6.vue'
const background = ref('./img/background.png')
const box1_1_2 = ref('./img/box1_1_2.png')
</script>

<style lang="less" scoped>
.home-container {
  box-sizing: border-box;
  .w {
    box-sizing: border-box;
    padding: 0 50px;
    width: 100%;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  > .box1 {
    width: 100%;
    height: auto;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: start;
    .box1_1 {
      display: flex;
      flex-direction: column;
      width: 60%;
      height: auto;
      .box1_1_2 {
        margin-top: -20px;
        width: 100%;
        height: 390px;
        border-radius: 10px;
      }
    }
    .box1_2 {
      display: flex;
      flex-direction: column;
      margin-left: 25px;
      width: 40%;
      height: auto;
    }
  }
  .box2 {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    height: 445px;
    .box2_1 {
      // width: 431px;
      height: 420px;
      border-radius: 10px;
      .box1_1_1_left {
        position: relative;
        float: left;
        box-sizing: border-box;
        width: 431px;
        height: 420px;
        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
        }
      }
    }
    .box2_2 {
      position: relative;
      margin: 0 20px;
      width: 100%;
      height: 420px;
      border-radius: 10px;
      background: url('./img/box2_1_middle.jpeg') no-repeat center center / cover;
      .span_middle {
        position: absolute;
        top: 234px;
        left: 273px;
        font-size: 26px;
        color: #fff;
      }
      .span_middle2 {
        position: absolute;
        top: 284px;
        left: 285px;
        font-size: 26px;
        color: #fff;
      }
    }
    .box2_3 {
      .img_right {
        border-radius: 10px;
        float: left;
        width: 206px;
        height: 420px;
      }
    }
  }
  .box3 {
    height: 445px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
