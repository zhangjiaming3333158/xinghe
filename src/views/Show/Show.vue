<template>
  <div class="container">
    <TopSearch></TopSearch>
    <!-- <SearchFix :scrollY="78"></SearchFix> -->
    <div class="name">物品展览馆</div>
    <div class="img">
      <img class="left" src="./img/top1.jpeg" alt="" />
      <div class="middle"></div>
      <img class="right" src="./img/top2.jpeg" alt="" />
    </div>
    <div class="goods" v-show="showgoods">
      <el-row>
        <el-col :span="4">
          <div class="grid-content">
            <div class="fenlei">
              分类
              <i
                class="el-icon-caret-bottom"
                style="text-align: right"
                @click="fenleiShow"
              ></i>
            </div>
            <transition name="el-zoom-in-top">
              <el-card v-show="fenleishow" class="transition-box">
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model="checkAll"
                  @change="handleCheckAllChange"
                  >全选</el-checkbox
                >
                <div style="margin: 15px 0"></div>
                <el-checkbox-group
                  v-model="checkedOptions"
                  @change="handleCheckedOptionsChange"
                >
                  <el-checkbox
                    v-for="fenlei in op"
                    :label="fenlei"
                    :key="fenlei"
                    >{{ fenlei }}</el-checkbox
                  >
                </el-checkbox-group>
              </el-card>
            </transition>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/1.jpeg" alt="" />
            <div class="img-name">壮族花鸟纹</div>
            <img style="width: 100%; height: 100%" src="./img/2.jpeg" alt="" />
            <div class="img-name">壮族吉祥纹样服</div>
            <img style="width: 100%; height: 100%" src="./img/3.jpeg" alt="" />
            <div class="img-name">布依族金鱼花背带</div>
            <img style="width: 100%; height: 100%" src="./img/4.jpeg" alt="" />
            <div class="img-name">藏舞腰围裙</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/5.jpeg" alt="" />
            <div class="img-name">苗族刺绣围腰</div>
            <img style="width: 100%; height: 100%" src="./img/6.jpeg" alt="" />
            <div class="img-name">壮族方纹衣</div>
            <img style="width: 100%; height: 100%" src="./img/7.jpeg" alt="" />
            <div class="img-name">苗族老背带</div>
            <img style="width: 100%; height: 100%" src="./img/8.jpeg" alt="" />
            <div class="img-name">维吾尔宝塔纹衣带</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/9.jpeg" alt="" />
            <div class="img-name">苗族刺绣布巾</div>
            <img style="width: 100%; height: 100%" src="./img/10.jpeg" alt="" />
            <div class="img-name">苗族刺绣花边</div>
            <img style="width: 100%; height: 100%" src="./img/11.jpeg" alt="" />
            <div class="img-name">苗族华锦布纹</div>
            <img style="width: 100%; height: 100%" src="./img/12.jpeg" alt="" />
            <div class="img-name">金饰刺绣图</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/13.jpeg" alt="" />
            <div class="img-name">苗族蜡染布艺面料</div>
            <img style="width: 100%; height: 100%" src="./img/14.jpeg" alt="" />
            <div class="img-name">苗族螺纹蜡染</div>
            <img style="width: 100%; height: 100%" src="./img/15.jpeg" alt="" />
            <div class="img-name">手工编制羊毛</div>
            <img style="width: 100%; height: 100%" src="./img/16.jpeg" alt="" />
            <div class="img-name">蓝印花布料</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="goods" v-show="!showgoods">
      <el-row>
        <el-col :span="4">
          <div class="grid-content">
            <div class="fenlei">
              分类
              <i
                class="el-icon-caret-bottom"
                style="text-align: right"
                @click="fenleiShow"
              ></i>
            </div>
            <transition name="el-zoom-in-top">
              <el-card v-show="fenleishow" class="transition-box">
                <el-checkbox
                  :indeterminate="isIndeterminate"
                  v-model="checkAll"
                  @change="handleCheckAllChange"
                  >全选</el-checkbox
                >
                <div style="margin: 15px 0"></div>
                <el-checkbox-group
                  v-model="checkedOptions"
                  @change="handleCheckedOptionsChange"
                >
                  <el-checkbox
                    v-for="fenlei in op"
                    :label="fenlei"
                    :key="fenlei"
                    >{{ fenlei }}</el-checkbox
                  >
                </el-checkbox-group>
              </el-card>
            </transition>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content bg-purple"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/17.jpeg" alt="" />
            <div class="img-name">建议换图 这是沙特地区的服装</div>
            <img style="width: 100%; height: 100%" src="./img/18.jpeg" alt="" />
            <div class="img-name">摩洛哥珠饰</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content bg-purple-light"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/19.jpeg" alt="" />
            <div class="img-name">苗族万象纹</div>
            <img style="width: 100%; height: 100%" src="./img/20.jpeg" alt="" />
            <div class="img-name">苗族火象纹</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content bg-purple"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/21.jpeg" alt="" />
            <div class="img-name">苗族刺绣花条</div>
            <img style="width: 100%; height: 100%" src="./img/22.jpeg" alt="" />
            <div class="img-name">亚麻绣花布料</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            class="grid-content bg-purple-light"
            style="box-sizing: border-box; padding: 20px"
          >
            <img style="width: 100%; height: 100%" src="./img/23.jpeg" alt="" />
            <div class="img-name">苗族台江绣片</div>
            <img style="width: 100%; height: 100%" src="./img/24.jpeg" alt="" />
            <div class="img-name">壮族千结流苏</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <el-pagination
        v-model:current-page="currentPage1"
        v-model:page-size="pageSize3"
        layout="prev, pager, next, jumper"
        :total="24"
        @current-change="handleCurrentChange"
      />
      <!-- @size-change="handleSizeChange" -->
      <!-- :small="small" -->
      <!-- :disabled="disabled" -->
      <!-- :background="background" -->
    </div>
  </div>
</template>

<script>
import SearchFix from '@/components/SearchFix.vue'
import TopSearch from '@/components/TopSearch.vue'
const Options = ['物品']
export default {
  name: 'Show',
  components: {
    SearchFix,
    TopSearch,
  },
  methods: {
    handleCurrentChange(val) {
      if (val == 1) {
        this.showgoods = true
      } else {
        this.showgoods = false
      }
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? Options : []
      this.isIndeterminate = false
    },
    handleCheckedOptionsChange(value) {
      console.log(value)
      let checkedCount = value.length
      this.checkAll = checkedCount === this.op.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.op.length
    },
    fenleiShow() {
      this.fenleishow = !this.fenleishow
    },
  },
  data() {
    return {
      currentPage1: 1,
      pageSize3: 16,
      input: '',
      showgoods: true,
      checkAll: false,
      checkedOptions: ['物品'],
      op: Options,
      isIndeterminate: true,
      fenleishow: true, //分类el-card展示
    }
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.container {
  box-sizing: border-box;
  padding: 20px;
  .name {
    width: 100%;
    height: 70px;
    font-size: 30px;
    text-align: center;
    line-height: 70px;
    background: #f5f5f5;
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
  .block {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .goods {
    width: 100%;
    height: 100%;
    .el-row {
      background-color: #6e8a79;
      border-radius: 10px;
      .el-col {
        border-radius: 4px;
        .grid-content {
          box-sizing: border-box;
          padding: 20px;
          border-radius: 4px;
          min-height: 36px;
          .fenlei {
            box-sizing: border-box;
            margin-left: 10px;
            padding-left: 20px;
            height: 40px;
            width: 100%;
            background-color: #517162;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            color: #fff;
            font-size: 20px;
            line-height: 40px;
          }
          .el-card {
            box-sizing: border-box;
            margin-left: 10px;
            height: 100%;
            width: 100%;
            color: #ba9463;
            .el-checkbox-group {
              .el-checkbox {
                margin: 20px 0 0 10px;
                display: block;
                font-size: 20px;
              }
            }
          }
          .img-name {
            width: 100%;
            height: 40px;
            background-color: #6e8a79;
            color: #fff;
            margin-bottom: 30px;
            text-align: left;
            line-height: 40px;
            font-size: 20px;
            // padding-left: 20px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
