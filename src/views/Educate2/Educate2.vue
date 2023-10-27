<template>
  <div class="container">
    <div class="top_image">
      <img src="./img/top.jpeg" alt="">
    </div>
    <div class="box">
      <div class="box-img">
        <!-- <div class="search">
          <div class="search_content">
            <el-form>
              <el-form-item>
                <el-input style="padding-left:104px;display: inline;" v-model="input" placeholder="请输入内容"></el-input>
                <el-button type="primary" style="width: 100px;height: 40px;">搜索</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div> -->
        <!-- <SearchFix :scrollY="400"></SearchFix> -->
        <div class="display">
          <div class="display_content">
            <div class="display_content_top">
              <h1>民族服饰赏析———设计作品展示</h1>
            </div>
            <hr>
            <div class="display_content_bottom">
              <div class="display_content_bottom_content">
                <div class="top">
                  <div class="top-img">
                    <img src="./img/1.jpeg" alt="">
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-top">
                    <span>水族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>水族善于纺织、染布，崇尚黑色和藏青色。水族男子穿大襟无领蓝布衫，戴瓜皮小帽，老年人着长衫，头缠里布包头，脚裹绑腿。 妇女穿青黑蓝色圆领历襟宽袖短衣，下着长裤，结布围腰，穿绣青布鞋。</span>
                  </div>
                </div>
              </div>
              <div class="display_content_bottom_content">
                <div class="top">
                  <div class="top-img">
                    <img src="./img/2.jpeg" alt="">
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-top">
                    <span>蒙古族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>蒙古族的服饰特点是多样化，色彩鲜艳，结构简单实用。蒙古族的服饰以蓝色、红色、白色为主色调，同时还有黄色、绿色、紫色等颜色。蒙古族的服饰结构大多采用直线和弧线相结合的方式，注重线条的流畅和美感。</span>
                  </div>
                </div>
              </div>
              <div class="display_content_bottom_content">
                <div class="top">
                  <div class="top-img">
                    <img src="./img/3.jpeg" alt="">
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-top">
                    <span>傣族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>傣族服饰的特点是颜色通常会使用红色、绿色、藏青色、蓝色、白色、黑色等，且常有大象、孔雀等图案。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="display">
          <div class="display_content">
            <div class="display_content_top">
              <h1>民族服饰赏析———设计作品展示</h1>
            </div>
            <hr>
            <div class="display_content_bottom">
              <div class="display_content_bottom_content">
                <div class="top">
                  <div class="top-img">
                    <img src="./img/4.jpeg" alt="">
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-top">
                    <span>壮族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>壮族服饰特点是风格别致，色彩艳丽。 壮族服饰是指具有壮族鲜明特色的服饰。 在服饰上男子与汉族无多大区别，女子则多姿多采，特别喜欢在鞋、帽、胸兜上用五色丝线绣上花纹，人物、鸟兽、花卉，五花八门，色彩斑斓。 </span>
                  </div>
                </div>
              </div>
              <div class="display_content_bottom_content">
                <div class="top">
                  <div class="top-img">
                    <img src="./img/5.jpeg" alt="">
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-top">
                    <span>苗族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>苗族服饰从总体来看，保持着中国民间的织、绣、挑、染的传统工艺技法，往往在运用一种主要的工艺手法的同时，穿插使用其他的工艺手法，或者挑中带绣，或者染中带绣，或者织绣结合，从而使这些服饰图案花团锦簇，溢彩流光，显示出鲜明的民族艺术特色。</span>
                  </div>
                </div>
              </div>
              <div class="display_content_bottom_content">
                <div class="top">
                  <div class="top-img">
                    <img src="./img/6.jpeg" alt="">
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-top">
                    <span>高山族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>高山族的服饰绚丽多姿、款式丰富。 传统的 服装 式样有交领衣、贯头衣、背心、胸衣、 裙子 长袖上衣等，男女都多穿裙装。 高山族的服饰皆重视装饰，饰物的种类很多，有耳饰、冠饰、额饰、颈饰、腰饰、胸饰、臂饰、手饰、脚饰等。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="block">
            <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="6" layout="prev, pager, next, jumper" :total="6">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchFix from '@/components/SearchFix.vue'
export default {
  name: 'Educate2',
  components:{
    SearchFix
  },
  data() {
    return {
      input: '',
      currentPage1: 1,
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: url(http://www.nsmzfs.com/images/bg.jpg);
  .top_image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    // background: url(./img/top.jpeg) no-repeat center center;
    img {
      width: 100%;
      height: 800px;
      // background: green;
    }
  }
  .box {
    box-sizing: border-box;
    padding: 0px 100px;
    width: 100%;
    height: 100%;
    .box-img {
      box-sizing: border-box;
      padding-top: 20px;
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
    .search {
      width: 100%;
      height: 90px;
      .search_content {
        width: 590px;
        height: 90px;
        margin: auto;
        /deep/ .el-input__inner {
          width: 300px;
          height: 40px;
          line-height: 30px;
        }
      }
    }
    .display {
      width: 100%;
      height: 740px;
      .display_content {
        width: 1200px;
        height: 720px;
        margin: auto;
        .display_content_top {
          width: 1200px;
          height: 70px;
          line-height: 70px;
        }
        .display_content_bottom {
          width: 1200px;
          height: 640px;
          display: flex;
          justify-content: space-between;
          .display_content_bottom_content {
            width: 580px;
            height: 100%;
            overflow: hidden;
            .top {
              width: 100%;
              height: 70%;
              overflow: hidden;
              background-color: #ccc;
              .top-img {
                width: 100%;
                // height: 100%;
                background-color: #ccc;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .bottom {
              width: 100%;
              height: 30%;
              background-color: #fff;
              .bottom-top {
                width: 100%;
                height: 30%;
                background-color: #fff;
                span {
                  padding-left: 20px;
                  font-size: 20px;
                  line-height: 50px;
                  color: #727272;
                }
              }
              .bottom-bottom {
                box-sizing: border-box;
                padding: 20px;
                width: 100%;
                height: 70%;
                background-color: #fff;
                span {
                  text-indent: 40px;
                  display: -webkit-box;
                  overflow: hidden;
                  -webkit-box-orient: vertical;
                  // line-clamp: 1;
                  -webkit-line-clamp: 3;
                  font-size: 15px;
                  color: #727272;
                }
              }
            }
          }
        }
      }
    }
    .bottom {
      width: 100%;
      height: 105px;
      .block {
        text-align: center;
      }
    }
  }
}
</style>
