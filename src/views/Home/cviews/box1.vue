<template>
  <div class="box1">
    <div class="box1_left">
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
          <span style="margin: 0 5px 0 15px; font-size: 30px">资讯</span>
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
        <div class="top">
          <li>
            <em
              ><img
                style="width: 17px; height: 14px"
                src="https://img.dpm.org.cn/Public/static/themes/image/lyc/index-icon2-1.png"
            /></em>
            <span>中国传统服饰元素在服装设计中的应用意义初探一陆玉叶</span>
          </li>
          <li>
            <em
              ><img
                style="width: 17px; height: 14px"
                src="https://img.dpm.org.cn/Public/static/themes/image/lyc/index-icon2-1.png"
            /></em>
            <span>传统服饰文化对中国现代服饰文化的影响分析-骆浩</span>
          </li>
          <li>
            <em
              ><img
                style="width: 17px; height: 14px"
                src="https://img.dpm.org.cn/Public/static/themes/image/lyc/index-icon2-1.png"
            /></em>
            <span>中国传统服饰元素在现代服装设计中的应用研究一泰上舒</span>
          </li>
        </div>
        <div
          class="middle"
          style="width: 100%; border-bottom: 1px solid wheat"
        ></div>
        <div class="bottom">
          <div class="bottom-left">
            <li>
              <i class="el-icon-top" style="color: white"></i>
              <span>中国民族服饰发展超势探究-《美与时代》尹志红 03/20</span>
            </li>
            <li>
              <i class="el-icon-top" style="color: white"></i>
              <span>我国少数民族服饰文化的传承与保护-评《中国....02/23</span>
            </li>
            <li>
              <i class="el-icon-top" style="color: white"></i>
              <span>现代服装设计中中国传统服饰元素的应用-刘心宽 02/14</span>
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
          <div class="bottom-right">
            <li>
              <span><em style="font-size: 20px">03</em>/20</span>
            </li>
            <li>
              <span><em style="font-size: 20px">02</em>/23</span>
            </li>
            <li>
              <span><em style="font-size: 20px">02</em>/24</span>
            </li>
            <li>
              <span><em style="font-size: 20px">04</em>/07</span>
            </li>
            <li>
              <span><em style="font-size: 20px">04</em>/04</span>
            </li>
            <li>
              <span><em style="font-size: 20px">04</em>/03</span>
            </li>
          </div>
        </div>
      </ul>
      <br />
    </div>
    <!-- <div class="box1_img"> -->
    <img src="../img/box1_1_1_img.png" alt="" class="box1_img" />
    <!-- </div> -->
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.box1 {
  display: flex;
  margin-bottom: 25px;
  width: 100%;
  height: auto;
  .box1_left {
    box-sizing: border-box;
    width: 60%;
    height: 395px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/home_block1_news_bg.jpg);
    .box1_1_1_left_top {
      padding: 30px 0 0 50px;
      width: 420px;
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
      width: 380px;
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
          width: 80%;
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
          width: 20%;
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
  .box1_img {
    flex: 1;
    height: 395px;
    border-radius: 0 10px 10px 0;
    background: no-repeat center center / cover;
  }
}
</style>
