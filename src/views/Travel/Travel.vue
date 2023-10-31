<template>
  <div class="container">
    <div class="Top">
      <!-- <el-form
        style="height: 100px; position: absolute; top: 100px; left: 360px"
      >
        <el-form-item>
          <el-input
            style="padding-left: 104px; display: inline"
            v-model="input"
            placeholder="请输入内容"
          ></el-input>
          <el-button type="primary" style="width: 100px; height: 40px"
            >搜索</el-button
          >
        </el-form-item>
      </el-form> -->
      <!-- <SearchFix :scrollY="78"></SearchFix> -->
      <div class="tuijian">推荐旅游</div>
      <div class="left">
        <div class="display_big">
          <el-carousel
            trigger="click"
            height="410px"
            :interval="5000"
            direction="vertical"
          >
            <el-carousel-item v-for="item in this.img1" :key="item.id">
              <img
                class="img_big"
                :src="item.url"
                @mouseover="showzhezhao1 = false"
                @mouseleave="showzhezhao1 = true"
              />
              <div class="zhezhao" v-show="showzhezhao1">
                <div class="name">{{ item.name }}</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 648px">{{ item.text }}</p>
                  </template>
                  <div class="text">{{ item.text }}</div>
                </el-tooltip>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="right">
        <div class="display_big">
          <el-carousel
            trigger="click"
            height="410px"
            :interval="5000"
            direction="vertical"
          >
            <el-carousel-item v-for="item in this.img2" :key="item.id">
              <img
                class="img_big"
                :src="item.url"
                @mouseover="showzhezhao2 = false"
                @mouseleave="showzhezhao2 = true"
              />
              <div class="zhezhao" v-show="showzhezhao2">
                <div class="name">{{ item.name }}</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 648px">{{ item.text }}</p>
                  </template>
                  <div class="text">{{ item.text }}</div>
                </el-tooltip>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="small">
      <div class="haoping">好评旅游</div>
      <div class="more" @click="changemore">更多</div>
      <el-row>
        <el-col :span="4">
          <div class="grid-content-fenlei">
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
        <el-col :span="20">
          <div class="right_pic">
            <div class="grid-content">
              <div class="display_small" style="margin-top: 100px">
                <img
                  class="img_small"
                  src="@/views/Travel/img/qianhu.jpg"
                  @mouseover="showzhezhao = false"
                  @mouseleave="showzhezhao = true"
                />
                <div class="name">千户苗寨</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 342px">
                      千户苗寨，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。千户苗寨是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。千户苗寨是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                    </p>
                  </template>
                  <div class="text_small">
                    千户苗寨，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。千户苗寨是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。千户苗寨是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                  </div>
                </el-tooltip>
              </div>
            </div>
            <div class="grid-content">
              <div class="display_small" style="margin-top: 100px">
                <img
                  class="img_small"
                  src="@/views/Travel/img/chuanxi.jpg"
                  @mouseover="showzhezhao = false"
                  @mouseleave="showzhezhao = true"
                />
                <div class="name">川西</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 342px">
                      川西多指四川阿坝州甘孜州等地区。这个地区自然风景优美迷人，九寨沟、黄龙、卧龙自然保护区、四姑娘山、米亚罗风景区、九曲黄河十八弯等风景名胜都位于川西地区，是四川省风景最迷人的一个地区，也是旅游和户外的理想去处。川西坝子，有“小江南”的美称，因其独特的自然地理条件孕育了独特的人文景观和风俗习惯由于四川境内多山地、高原，盆地倒是面积小得多。盆地内丘陵纵横；高原上矗立着巍峨壮观的冰川、雪山。地势跌宕起伏，气候复杂多变。它又地处中国西南腹地，长江上游。是联接中国西南、西北和华中三大地区的天然纽带。东西南北文化在这里交流，长江黄河文明在这里融合。独特的巴蜀文化，神秘古朴的藏、羌、彝风情。数亿年的地质运动，造就了瑰丽险峻的巴蜀风光。独特的人文地理环境，孕育出了丰厚的文化积淀。
                    </p>
                  </template>
                  <div class="text_small">
                    川西多指四川阿坝州甘孜州等地区。这个地区自然风景优美迷人，九寨沟、黄龙、卧龙自然保护区、四姑娘山、米亚罗风景区、九曲黄河十八弯等风景名胜都位于川西地区，是四川省风景最迷人的一个地区，也是旅游和户外的理想去处。川西坝子，有“小江南”的美称，因其独特的自然地理条件孕育了独特的人文景观和风俗习惯由于四川境内多山地、高原，盆地倒是面积小得多。盆地内丘陵纵横；高原上矗立着巍峨壮观的冰川、雪山。地势跌宕起伏，气候复杂多变。它又地处中国西南腹地，长江上游。是联接中国西南、西北和华中三大地区的天然纽带。东西南北文化在这里交流，长江黄河文明在这里融合。独特的巴蜀文化，神秘古朴的藏、羌、彝风情。数亿年的地质运动，造就了瑰丽险峻的巴蜀风光。独特的人文地理环境，孕育出了丰厚的文化积淀。
                  </div>
                </el-tooltip>
              </div>
            </div>
            <div class="grid-content">
              <div class="display_small" style="margin-top: 100px">
                <img
                  class="img_small"
                  src="@/views/Travel/img/xizang.jpg"
                  @mouseover="showzhezhao = false"
                  @mouseleave="showzhezhao = true"
                />
                <div class="name">西藏</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 342px">
                      西藏坐落于世界上隆起最晚、面积最大、海拔最高的青藏高原的主体区域。地形复杂多样、景象万千，有高峻逶迤的山脉，陡峭深切的沟峡以及冰川、裸石、戈壁等多种地貌类型；有分属寒带、温带、亚热带、热带的种类繁多的奇花异草和珍稀野生动物，还有垂直分布的“一山见四季”、“十里不同天”的自然奇观等。地貌大致可分为喜马拉雅山区，藏南谷地，藏北高原和藏东高山峡谷区，具有瑰丽
                    </p>
                  </template>
                  <div class="text_small">
                    西藏坐落于世界上隆起最晚、面积最大、海拔最高的青藏高原的主体区域。地形复杂多样、景象万千，有高峻逶迤的山脉，陡峭深切的沟峡以及冰川、裸石、戈壁等多种地貌类型；有分属寒带、温带、亚热带、热带的种类繁多的奇花异草和珍稀野生动物，还有垂直分布的“一山见四季”、“十里不同天”的自然奇观等。地貌大致可分为喜马拉雅山区，藏南谷地，藏北高原和藏东高山峡谷区，具有瑰丽
                  </div>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div class="right_pic" v-show="this.more">
            <div class="grid-content">
              <div class="display_small" style="margin-top: 100px">
                <img
                  class="img_small"
                  src="@/views/Travel/img/fujian.jpg"
                  @mouseover="showzhezhao = false"
                  @mouseleave="showzhezhao = true"
                />
                <div class="name">福建土楼</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 342px">
                      福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                    </p>
                  </template>
                  <div class="text_small">
                    福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                  </div>
                </el-tooltip>
              </div>
            </div>
            <div class="grid-content">
              <div class="display_small" style="margin-top: 100px">
                <img
                  class="img_small"
                  src="@/views/Travel/img/yunhe.jpg"
                  @mouseover="showzhezhao = false"
                  @mouseleave="showzhezhao = true"
                />
                <div class="name">云和</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 342px">
                      云和县，浙江省丽水市下辖县，地处浙江省西南部，云和梯田集旅游休闲、摄影观光、民俗欣赏于一体的云和县首批4A级旅游景区。最早开发于唐初，兴于元、明，距今有1000多年历史，总面积51平方公里。海拔跨度为200米—1400多米，垂直高度1200多米，跨越高山、丘陵、谷地三个地质景观带，最多有700多层，是华东最大的梯田群，被誉为“中国最美梯田”，是中国摄影之乡——丽水的主要采风基地，景区拥有梯田、云海、山村、竹海、溪流、瀑布、雾凇等自然景观，“云雾奇观，浮云世界”是云和梯田的一大特色亮点。有“千层梯田、千米落差、千年历史”之称。现为国家4A级旅游景区。
                    </p>
                  </template>
                  <div class="text_small">
                    云和县，浙江省丽水市下辖县，地处浙江省西南部，云和梯田集旅游休闲、摄影观光、民俗欣赏于一体的云和县首批4A级旅游景区。最早开发于唐初，兴于元、明，距今有1000多年历史，总面积51平方公里。海拔跨度为200米—1400多米，垂直高度1200多米，跨越高山、丘陵、谷地三个地质景观带，最多有700多层，是华东最大的梯田群，被誉为“中国最美梯田”，是中国摄影之乡——丽水的主要采风基地，景区拥有梯田、云海、山村、竹海、溪流、瀑布、雾凇等自然景观，“云雾奇观，浮云世界”是云和梯田的一大特色亮点。有“千层梯田、千米落差、千年历史”之称。现为国家4A级旅游景区。
                  </div>
                </el-tooltip>
              </div>
            </div>
            <div class="grid-content">
              <div class="display_small" style="margin-top: 100px">
                <img
                  class="img_small"
                  src="@/views/Travel/img/erhai2.jpg"
                  @mouseover="showzhezhao = false"
                  @mouseleave="showzhezhao = true"
                />
                <div class="name">洱海</div>
                <el-tooltip
                  :open-delay="500"
                  class="item"
                  effect="dark"
                  placement="bottom"
                >
                  <template #content>
                    <p style="max-width: 342px">
                      洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                    </p>
                  </template>
                  <div class="text_small">
                    洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                  </div>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div class="right_pic" v-show="this.more">
            <el-col :span="8">
              <div class="grid-content">
                <div class="display_small" style="margin-top: 100px">
                  <img
                    class="img_small"
                    src="@/views/Travel/img/guilin2.jpg"
                    @mouseover="showzhezhao = false"
                    @mouseleave="showzhezhao = true"
                  />
                  <div class="name">桂林</div>
                  <el-tooltip
                    :open-delay="500"
                    class="item"
                    effect="dark"
                    placement="bottom"
                  >
                    <template #content>
                      <p style="max-width: 342px">
                        桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                      </p>
                    </template>
                    <div class="text_small">
                      桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。
                    </div>
                  </el-tooltip>
                </div>
              </div>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SearchFix from '@/components/SearchFix.vue'
const Options = ['旅游']
export default {
  name: 'Travel',
  components: {
    SearchFix,
  },
  data() {
    return {
      value: '',
      input: '',
      showzhezhao1: true,
      showzhezhao2: true,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      checkAll: false,
      checkedOptions: ['旅游'],
      op: Options,
      isIndeterminate: true,
      fenleishow: true, //分类el-card展示
      img1: [
        {
          id: 1,
          url: '/img/qianhu/qianhu2.jpg',
          name: '千户苗寨',
          text: '千户苗寨，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。千户苗寨是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。千户苗寨是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
        {
          id: 2,
          url: '/img/xizang/xizang2.jpg',
          name: '西藏',
          text: '西藏坐落于世界上隆起最晚、面积最大、海拔最高的青藏高原的主体区域。地形复杂多样、景象万千，有高峻逶迤的山脉，陡峭深切的沟峡以及冰川、裸石、戈壁等多种地貌类型；有分属寒带、温带、亚热带、热带的种类繁多的奇花异草和珍稀野生动物，还有垂直分布的“一山见四季”、“十里不同天”的自然奇观等。地貌大致可分为喜马拉雅山区，藏南谷地，藏北高原和藏东高山峡谷区，具有瑰丽 的风光景象。',
        },
        {
          id: 3,
          url: '/img/fujian/fujian2.jpg',
          name: '福建土楼',
          text: '福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。福建土楼，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
        {
          id: 4,
          url: '/img/xinjiang/xinjiang2.jpg',
          name: '新疆',
          text: '新疆，位于西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。新疆，位于西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。新疆，位于西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
        {
          id: 5,
          url: '/img/guilin/guilin.jpg',
          name: '桂林',
          text: '桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。桂林，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
      ],
      img2: [
        {
          url: '/img/neimenggu/neimenggu.jpg',
          name: '内蒙古',
          text: '内蒙古自治区，地处中国北部，东北部与黑龙江、吉林、辽宁、河北交界，南部与山西、陕西、宁夏相邻，西南部与甘肃毗连，北部与俄罗斯、蒙古接壤 。内蒙古土地辽阔、资源丰富，有“东林西矿、南农北牧”之称，草原、森林和人均耕地面积居全中国第一，稀土金属储量居世界首位，同时也是中国最大的草原牧区。这里保存有中国最完好的草原，也是一代天骄成吉思汗的诞生之地，素有“牧草王国、歌的海洋、酒的故乡”之称',
        },
        {
          url: '/img/erhai/erhai.jpg',
          name: '洱海',
          text: '洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。洱海，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
        {
          url: '/img/heilongjiang/heilongjiang.jpg',
          name: '黑龙江',
          text: '黑龙江，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。黑龙江，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。黑龙江，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
        {
          url: '/img/ningxia/ningxia.jpg',
          name: '宁夏月牙泉',
          text: '宁夏月牙泉，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。宁夏月牙泉，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。宁夏月牙泉，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
        {
          url: '/img/xinjiang/xinjiang.jpg',
          name: '新疆',
          text: '新疆，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。新疆，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。新疆，位于贵州省西南部，是中国最大的苗族聚居地，也是中国最具特色的民族风情旅游胜地之一。',
        },
      ],
      more: false,
    }
  },
  methods: {
    changemore() {
      this.more = !this.more
      console.log(1)
    },
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
  mounted() {},
}
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.container {
  width: 100%;
  height: 100%;
  .Top {
    width: 100%;
    height: 65%;
    display: flex;
    /deep/ .el-input__inner {
      width: 430px;
      height: 40px;
      line-height: 30px;
    }
    .tuijian {
      position: absolute;
      top: 150px;
      left: 50px;
      font-size: 30px;
    }
    .left {
      box-sizing: border-box;
      padding-top: 30px;
      width: 45%;
      height: 100%;
      margin: 50px 50px 0 50px;
      .display_big {
        position: relative;
        width: 100%;
        height: 400px;
        margin: 50px 0 0 0;
        .zhezhao {
          z-index: 999;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30%;
          background-color: rgba(0, 0, 0, 0.5);
          .name {
            color: white;
            font-size: 20px;
            margin-top: 10px;
            margin-left: 50px;
          }
          .text {
            color: white;
            font-size: 15px;
            margin: 10px 50px 0 50px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            // line-clamp: 1;
            -webkit-line-clamp: 3;
          }
        }
        .img_big {
          width: 100%;
          height: 100%;
          margin-top: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .display_small {
        width: 1495px;
        height: 670px;
        .display_small_hang {
          width: 1495px;
          height: 217px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          div {
            width: 22%;
            height: 217px;
            float: left;
          }
        }
      }
    }
    .right {
      box-sizing: border-box;
      padding-top: 30px;
      width: 45%;
      height: 100%;
      margin-top: 50px;
      .display_big {
        position: relative;
        width: 100%;
        height: 400px;
        margin: 50px 0;
        .zhezhao {
          z-index: 999;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 30%;
          background-color: rgba(0, 0, 0, 0.5);
          .name {
            color: white;
            font-size: 20px;
            margin-top: 10px;
            margin-left: 50px;
          }
          .text {
            color: white;
            font-size: 15px;
            margin: 10px 50px 0 50px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            // line-clamp: 1;
            -webkit-line-clamp: 3;
          }
        }
        .img_big {
          width: 100%;
          height: 100%;
          margin-top: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .display_small {
        width: 1495px;
        height: 670px;
        .display_small_hang {
          width: 1495px;
          height: 217px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          div {
            width: 22%;
            height: 217px;
            float: left;
          }
        }
      }
    }
  }
  .small {
    position: relative;
    box-sizing: border-box;
    padding: 50px;
    margin-top: -100px;
    margin-left: -10px;
    width: 100%;
    height: 35%;
    .haoping {
      position: absolute;
      top: 90px;
      left: 57px;
      font-size: 30px;
    }
    .more {
      position: absolute;
      top: 100px;
      right: 50px;
      font-size: 20px;
      color: #3982b6;
      z-index: 99;
    }
    .more:hover {
      cursor: pointer;
    }
    .el-row {
      .el-col {
        .grid-content-fenlei {
          margin-top: 80px;
          box-sizing: border-box;
          padding-top: 20px;
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
        }
        .right_pic {
          margin-left: 10px;
          display: flex;
          height: 350px;
          .grid-content {
            height: 100%;
            width: 100%;
            padding: 0 10px;
            .display_small {
              width: 100%;
              height: 265px;
              float: left;
              .img_small {
                width: 100%;
                height: 65%;
              }
              .name {
                width: 100%;
                height: 12%;
                color: #000;
                font-size: 20px;
              }
              .el-tooltip {
                width: 100px;
                height: 23%;
              }
              .text_small {
                width: 100%;
                height: 23%;
                color: #000;
                font-size: 15px;
                text-indent: 2em;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
              }
            }
          }
        }
      }
    }

    .display_right {
      float: right;
      width: 50%;
      height: 100%;
      .display_small {
        width: 48%;
        height: 260px;
        float: left;
        margin-right: 13px;
        .img_small {
          width: 100%;
          height: 100%;
        }
        .name {
          color: #000;
          font-size: 20px;
        }
        .text_small {
          height: 100px;
          color: #000;
          font-size: 15px;
          text-indent: 2em;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
  }
}
</style>
