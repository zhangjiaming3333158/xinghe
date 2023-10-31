<template>
  <div class="box1_1_1_left">
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
          >星禾</span
        >·
        <span style="margin: 0 5px 0 15px; font-size: 30px">活动</span>
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
      <span style="position: relative; float: right"
        ><i style="position: absolute; right: 28px">更多</i
        ><img
          class="morefish"
          style="position: absolute; right: 10px"
          src="https://img.dpm.org.cn/Public/static/themes/image/more.png"
      /></span>
    </div>
    <hr />
    <ul class="box1_1_1_left_bottom" style="font-size: 20px">
      <div class="bottom">
        <div class="bottom-left">
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>关于民族服饰变装热潮的可行与原因分析新04 / 07</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>少数民族服饰图案在现代服饰设计中的应用04/ 04</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>对满族民族服饰图案的文化寓意探讨与研究04 /03</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>关于民族服饰变装热潮的可行与原因分析新04 / 07</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>少数民族服饰图案在现代服饰设计中的应用04/ 04</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>对满族民族服饰图案的文化寓意探讨与研究04 /03</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>关于民族服饰变装热潮的可行与原因分析新04 / 07</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>少数民族服饰图案在现代服饰设计中的应用04/ 04</span>
          </li>
          <li>
            <i class="el-icon-collection-tag" style="color: white"></i>
            <span>对满族民族服饰图案的文化寓意探讨与研究04 /03</span>
          </li>
        </div>
      </div>
    </ul>
    <br />
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.box1_1_1_left {
  float: left;
  box-sizing: border-box;
  width: 450px;
  height: 420px;
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
    width: 360px;
    height: 250px;
    // background-color: yellow;
    .top {
      height: 80px;
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
        width: 90%;
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
    }
  }
}
</style>
