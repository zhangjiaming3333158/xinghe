<template>
  <div class="container">
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
    <div class="name">3D物品展览馆</div>
    <div class="img">
      <img class="left" src="/img/background.png" alt="">
      <div class="middle"></div>
      <img class="right" src="/img/background.png" alt="">
    </div>

    <div class="show-part">
      <div class="show-left">
        <div class="model3D-part">
          <div class="model3D">
            <div class="model"></div>
            <div class="model-name"></div>
          </div>
          <div class="model3D">
            <div class="model"></div>
            <div class="model-name"></div>
          </div>
        </div>
      </div>

      <div class="show-right">
        <div class="model3D-part">
          <div class="model3D">
            <div class="model"></div>
            <div class="model-name"></div>
          </div>
          <div class="model3D">
            <div class="model"></div>
            <div class="model-name"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show3d',
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    }
  },
}
</script>

<style lang="less" scoped>
/* 搜索区域 */
.container {
  box-sizing: border-box;
  padding: 20px;
  background-color: #f5f5f5;
  .search {
    width: 100%;
    height: 50px;
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
  .name {
    width: 100%;
    height: 70px;
    font-size: 30px;
    text-align: center;
    line-height: 70px;
  }
  .img {
    margin-bottom: 30px;
    height: 300px;
    width: 100%;
    .left {
      width: 48%;
      height: 100%;
      float: left;
      border-radius: 20px;
    }
    .middle {
      width: 4%;
      height: 100%;
      float: left;
    }
    .right {
      width: 48%;
      height: 100%;
      float: right;
      border-radius: 20px;
    }
  }
  /* 展示区域 */
  .show-part {
    margin: auto;
    position: relative;
    height: 1150px;
    width: 1200px;
    // background-color: lightcoral;
    display: flex;
    justify-content: center;
    .show-left {
      width: 590px;
      height: 100%;
      // background-color: tomato;
      float: left;
      margin-right: 40px;
      .img3D-part {
        width: 590px;
        height: 230px;
        // background-color: saddlebrown;
        margin-bottom: 20px;
      }
      .model3D-part {
        margin: auto;
        width: 570px;
        height: 675px;
        // background-color: olive;
        .model3D {
          height: 575px;
          width: 570px;
          // background-color: blue;
          .model {
            height: 523.5px;
            background-color: green;
          }
          .model-name {
            width: 568px;
            height: 40px;
            // background-color: aqua;
            // border: black 1px solid;
          }
        }
      }
    }
    .show-right {
      width: 590px;
      height: 100%;
      // background-color: teal;
      margin-left: 10px;
      .img3D-part {
        width: 590px;
        height: 230px;
        // background-color: saddlebrown;
        margin-bottom: 20px;
      }
      .model3D-part {
        margin: auto;
        width: 570px;
        height: 675px;
        // background-color: olive;
        .model3D {
          height: 575px;
          width: 570px;
          // background-color: blue;
          .model {
            height: 523.5px;
            background-color: crimson;
          }
          .model-name {
            width: 568px;
            height: 40px;
            // background-color: aqua;
            // border: black 1px solid;
          }
        }
      }
    }
  }
  /* 展示下方导航栏 */
  .block {
    text-align: center;
  }
}
</style>