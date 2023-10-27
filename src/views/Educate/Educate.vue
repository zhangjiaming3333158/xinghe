<template>
  <div class="main">
    <div class="background_img">
      <div class="content">
        <h1>
          非遗课程录入
        </h1>
        <form class="list">
          <el-form label-width="100px" :model="formLabelAlign">
            <el-form-item required>
              <span slot="label">
                <span style="color: black"><strong>课程名称</strong></span>
              </span>
              <el-input v-model="formLabelAlign.region" placeholder="课程名称"></el-input>
            </el-form-item>
            <el-form-item required>
              <span slot="label">
                <span style="color: black"><strong>课程类别</strong></span>
              </span>
              <el-input v-model="formLabelAlign.password" placeholder="课程类别"></el-input>
            </el-form-item>
            <el-form-item required>
              <span slot="label">
                <span style="color: black"><strong>课程内容</strong></span>
              </span>
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
              </el-input>
            </el-form-item>
            <el-form-item required>
              <span slot="label">
                <span style="color: black"><strong>课程图片</strong></span>
              </span>
              <el-upload action="" class="upload-demo" drag multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item style="">
              <span slot="label">
                <span style="color: black"><strong>课程其余文件</strong></span>
              </span>
              <el-upload class="upload-demo" action="" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed">
                <el-button type="primary" style="width: 110px;height: 40px;">主要按钮</el-button>
                <div slot="tip" class="el-upload__tip">只能上传xxx文件</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </form>
        <div class="login-button" style="margin: auto;">
          <el-button type="primary" style="width: 200px;height: 50px;">
            <el-button type="text" @click="open" style="color:white;font-size: 15px;">确认提交</el-button>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Educate',
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
      fileList: [],
      textarea: '',
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.main {
  width: 100%;
  .background_img {
    margin: auto;
    width: 80%;
    background: url(https://img.dpm.org.cn/Public/static/themes/image/xf/bg0.jpg);
    .content {
      position: relative;
      width: 60%;
      margin: auto;
      padding-top: 50px;
      .arrow {
        position: absolute;
        top: 350px;
        right: -100px;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 25px;
        border: 1px solid skyblue;
      }
      .list {
        height: 550px;
        padding: 50px;
        position: relative;
        .el-form-item {
          margin-top: 20px;
        }
      }
      h1 {
        margin: -20px 0;
        font-size: 30px;
        text-align: center;
      }
      .login-button {
        text-align: center;
        height: 100px;
        width: 100%;
      }
    }
  }
}
</style>
    