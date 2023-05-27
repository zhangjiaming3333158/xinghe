<template>
  <div class="container">
    <div class="top_image">
      <img src="" alt="">
    </div>
    <div class="box">
      <div class="box-img">
        <div class="search">
          <div class="search_content">
            <el-form>
              <el-form-item>
                <el-input style="padding-left:104px;display: inline;" v-model="input" placeholder="请输入内容"></el-input>
                <el-button type="primary" style="width: 100px;height: 40px;">搜索</el-button>
              </el-form-item>
            </el-form>
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
                    <img src="./img/1.jpeg" alt="">
                  </div>
                </div>
                <div class="bottom">
                  <div class="bottom-top">
                    <span>佤族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>佤族崇善红色和黑色，服饰多数以黑为质，以红为饰，基本上还保留着古老的山地民族特色。西盟地区的男子用黑布或红布缠头，上身穿无领短衣，裤子</span>
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
                    <span>佤族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>佤族崇善红色和黑色，服饰多数以黑为质，以红为饰，基本上还保留着古老的山地民族特色。西盟地区的男子用黑布或红布缠头，上身穿无领短衣，裤子</span>
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
                    <span>佤族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>佤族崇善红色和黑色，服饰多数以黑为质，以红为饰，基本上还保留着古老的山地民族特色。西盟地区的男子用黑布或红布缠头，上身穿无领短衣，裤子</span>
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
                    <span>佤族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>佤族崇善红色和黑色，服饰多数以黑为质，以红为饰，基本上还保留着古老的山地民族特色。西盟地区的男子用黑布或红布缠头，上身穿无领短衣，裤子</span>
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
                    <span>佤族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>佤族崇善红色和黑色，服饰多数以黑为质，以红为饰，基本上还保留着古老的山地民族特色。西盟地区的男子用黑布或红布缠头，上身穿无领短衣，裤子</span>
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
                    <span>佤族服饰</span>
                  </div>
                  <div class="bottom-bottom">
                    <span>佤族崇善红色和黑色，服饰多数以黑为质，以红为饰，基本上还保留着古老的山地民族特色。西盟地区的男子用黑布或红布缠头，上身穿无领短衣，裤子</span>
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
export default {
  name: 'Educate2',
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
    img {
      width: 100%;
      height: 400px;
      background: green;
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
