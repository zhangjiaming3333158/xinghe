<template>
  <div class="box1_2_2">
    <div class="box1_1_1_left_top" style="color: white">
      <h1 style="position: relative; float: left">
        <span
          ><img
            style="
              width: 24px;
              height: 36px;
              position: absolute;
              top: 3px;
              left: -20px;
            "
            src="https://img.dpm.org.cn/Public/static/themes/image/public-icon1.png"
        /></span>
        <span style="margin: 0 15px 0 5px; font-size: 30px; line-height: 40px"
          >开放</span
        >·
        <span style="margin: 0 5px 0 15px; font-size: 30px">公告</span>
        <span class="tit-span"
          ><img
            style="
              width: 24px;
              height: 36px;
              position: absolute;
              top: 3px;
              left: 170px;
            "
            src="https://img.dpm.org.cn/Public/static/themes/image/public-icon2.png"
        /></span>
      </h1>
      <span class="more" style="position: relative; float: right"
        ><i style="position: absolute; right: 28px">更多</i
        ><img
          class="morefish"
          style="position: absolute; right: 10px"
          src="https://img.dpm.org.cn/Public/static/themes/image/more.png"
      /></span>
    </div>
    <hr />
    <ul class="box1_1_1_left_bottom" style="font-size: 20px">
      <div class="top">
        <li>
          <em
            ><img
              style="width: 17px; height: 14px"
              src="https://img.dpm.org.cn/Public/static/themes/image/lyc/index-icon2-1.png"
          /></em>
          <span>新苗族系列元素春季上新</span>
        </li>
      </div>
      <div
        class="middle"
        style="width: 100%; border-bottom: 1px solid wheat"
      ></div>
      <div class="bottom">
        <div class="bottom-left">
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>2月25日星禾不停机更新公告</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>系统更新期间不稳定通告，西北展区稳定运行</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>商用端口会员制设立通告与商业合作公告</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>客户端定制实现与寄送流程说明</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>星禾正式设立时间与历程一览</span>
          </li>
        </div>
        <div class="bottom-right">
          <li>
            <span>2023 / 02 / 25</span>
          </li>
          <li>
            <span>2023 / 02 / 25</span>
          </li>
          <li>
            <span>2023 / 01 / 28</span>
          </li>
          <li>
            <span>2022 / 12 / 28</span>
          </li>
          <li>
            <span>2022 / 12 / 05</span>
          </li>
        </div>
      </div>
    </ul>
    <br />
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.box1_2_2 {
  float: left;
  box-sizing: border-box;
  width: 520px;
  height: 330px;
  border-radius: 10px;
  background: url(https://img.dpm.org.cn/Public/static/themes/image/home_block1_news_bg.jpg);
  .box1_1_1_left_top {
    padding: 30px 0 0 50px;
    width: 400px;
    height: 40px;
    line-height: 25px;
    border-radius: 10px 0 0 0;
    .morefish {
      transform: rotate(0deg); /* 初始旋转度数为0 */
      transition: transform 0.5s; /* 添加过渡效果 */
      &:hover {
        transform: rotate(180deg); /* 在悬停时旋转180度 */
      }
    }
  }
  .box1_1_1_left_bottom {
    padding: 15px 0 0 50px;
    width: 420px;
    height: 250px;
    .top {
      width: 100%;
      margin-bottom: 20px;
      li {
        color: white;
        display: block;
        height: 30px;
        line-height: 40px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        span {
          padding-left: 10px;
        }
      }
    }
    .bottom {
      .bottom-left {
        float: left;
        width: 70%;
        height: 100%;
        li {
          color: white;
          display: block;
          height: 30px;
          line-height: 40px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          span {
            padding-left: 10px;
          }
        }
      }
      .bottom-right {
        float: left;
        width: 30%;
        height: 100%;
        li {
          color: white;
          display: block;
          margin-left: 20px;
          height: 30px;
          line-height: 40px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
