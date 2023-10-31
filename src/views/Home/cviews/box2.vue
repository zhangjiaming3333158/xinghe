<template>
  <div class="box1_2_1">
    <div class="box1_2_1_top">
      <div class="text" style="text-align: center; color: #333">
        <div class="h1" id="date11" style="color: #79b5d6; font-size: 16px">
          {{ year }} / {{ month }} / {{ day }}
        </div>
        <div class="h2" id="date22" style="font-size: 30px">在线定制</div>
        <div style="text-align: center; margin-top: 10px; line-height: 20px">
          除法定节假日外，每周一23：00至5：00更新维护<br /><strong
            style="color: #909252"
            >无需登录即可休验定制 登录后便可购买寄送</strong
          >
        </div>
      </div>
      <div class="list" style="color: #333">
        <div class="ul flex main-center" style="position: relative">
          <div
            class="li"
            style="text-align: left; float: left; margin-left: 80px"
          >
            <h1>08:30</h1>
            <p>客服上班时间</p>
          </div>
          <span style="position: absolute; top: 3px; left: 160px"
            ><img
              style="background-color: #333"
              v-lazy="
                'https://img.dpm.org.cn/Public/static/themes/image/png7a.png'
              "
          /></span>
          <div
            class="li"
            style="text-align: center; float: left; margin-left: 60px"
          >
            <h1>16:10</h1>
            <p>统一寄送时间</p>
          </div>
          <span style="position: absolute; top: 3px; left: 300px"
            ><img
              style="background-color: #333"
              v-lazy="
                'https://img.dpm.org.cn/Public/static/themes/image/png7a.png'
              "
          /></span>
          <div
            class="li last"
            style="text-align: right; float: left; margin-left: 50px"
          >
            <h1>17:00</h1>
            <p>客服下班时间</p>
          </div>
        </div>
      </div>
    </div>
    <div class="box1_2_1_bottom">
      <div class="ll" style="position: relative">
        <div class="div">
          <div class="icon"></div>
          <img
            src="../img/ThreeD.png"
            alt=""
            class="i"
            style="
              position: absolute;
              top: 50px;
              left: 82px;
              width: 75px;
              height: 75px;
            "
          />
        </div>
        <div
          style="position: absolute; top: 140px; left: 54px; text-align: center"
        >
          <div class="p" style="font-size: 14px">咨询电话</div>
          <div class="tel" style="font-size: 20px">400-950-1925</div>
          <div class="time">服务时间：08:00–20:00</div>
        </div>
      </div>
      <div class="rr">
        <div class="li" style="float: left">
          <div class="icon">
            <img
              style="width: 54px; height: 67px"
              src="@/views/Home/img/traver.png"
              alt=""
              class="i with-border"
            />
          </div>
        </div>
        <div class="li" style="float: left">
          <div class="icon">
            <img
              style="width: 52px; height: 50px"
              v-lazy="
                'https://img.dpm.org.cn/Uploads/Picture/2022/07/09/s62c890f2c1476.png'
              "
              alt=""
              class="i"
            />
          </div>
          <div class="t">游览须知</div>
        </div>
        <div class="li" style="float: left">
          <div class="icon">
            <img
              style="width: 54px; height: 63px"
              src="@/views/Home/img/history.png"
              alt=""
              class="i"
            />
          </div>
        </div>
        <div class="li" style="float: left">
          <div class="icon">
            <img
              style="width: 52px; height: 45px"
              v-lazy="
                'https://img.dpm.org.cn/Uploads/Picture/2022/07/09/s62c89110b6220.png'
              "
              alt=""
              class="i"
            />
          </div>
          <div class="t">全景星禾</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = ['../img/ThreeD.png']
const today = new Date() //获取当前时间
var year = today.getFullYear() //获取年份
var month = today.getMonth() + 1 //获取月份
var day = today.getDate() //获取日期
console.log(year, month, day)
</script>

<style scoped lang="less">
.box1_2_1 {
  margin-bottom: 25px;
  width: 520px;
  height: auto;
  // background-color: yellow;
  .box1_2_1_top {
    float: left;
    box-sizing: border-box;
    padding: 20px;
    width: 520px;
    height: 200px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/2023tea/jpg3.jpg)
      no-repeat center center / cover;
  }
  .box1_2_1_bottom {
    float: left;
    width: 520px;
    height: 235px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/2023tea/jpg4.jpg)
      no-repeat center center / cover;
    .ll {
      float: left;
      box-sizing: border-box;
      padding: 20px;
      width: 240px;
      height: 100%;
      color: #333;
      border-right: 1px solid #526985;
      .icon {
        position: absolute;
        top: 37px;
        left: 68px;
        width: 100px;
        height: 100px;
        border-radius: 10px;
        background-color: #29374b;
      }
    }
    .rr {
      float: left;
      width: 280px;
      height: 100%;
      .li {
        box-sizing: border-box;
        padding: 20px;
        height: 50%;
        width: 50%;
        text-align: center;
        justify-content: center;
        color: #fff;
        .icon {
          position: relative;
          width: 100%;
          height: 100%;
          .i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
}
</style>
