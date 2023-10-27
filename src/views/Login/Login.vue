<template>
  <div class="content">
    <div class="login">
      <div class="usertype">
        <div class="vip">
          <img src="./images/lightimg.png" alt="" class="vipimg">
          <div class="vipword"><router-link to="/login" class="vipword">我是会员</router-link></div>
        </div>
        <div class="signin">
          <img src="./images/grayimg.png" alt="" class="signinimg">
          <div class="signinword"><router-link to="/register" class="signinword">还未注册</router-link></div>
        </div>
      </div>
      <div class="login-content">
        <div style="margin-left: -50px;">
          <el-form label-width="100px" :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
            <el-form-item prop="region">
              <span slot="label">
                <span style="color: white"><strong>账号</strong></span>
              </span>
              <el-input v-model="formLabelAlign.region" placeholder="邮箱" type="email"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <span slot="label">
                <span style="color: white"><strong>密码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.password" placeholder="密码" type="password"></el-input>
            </el-form-item>
            <el-form-item style="width: 310px;" prop="test">
              <span slot="label">
                <span style="color: white"><strong>验证码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.test" placeholder="验证码"></el-input>
              <img class="test-img" src="./images/code.png" alt="">
            </el-form-item>
            <div class="login-button" style="margin: auto;">
              <el-button plain style="position: absolute;top: 25px;left: 200px;width: 150px;" @click="submitForm('formLabelAlign')">登录</el-button>
              <div style="float: right;color:white">忘记密码？</div>
            </div>
          </el-form>
        </div>
        <div class="third-party">
          <div class="title">
            <div class="third-party-title-hr"></div>
            <div class="third-party-login">第三方账号登录</div>
            <div class="third-party-title-hr"></div>
          </div>
          <div class="three-party-ul">
            <img style="height: 100px;width: 100px;margin-top: -10px;" src="./images/wechat.png" alt="">
            <img style="height: 100px;width: 100px;margin-top: -10px;" src="./images/QQ.png" alt="">
          </div>
        </div>
        <div class="private">
          星禾隐私政策
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        region: '',
        password: '',
        test: '',
      },
      rules: {
        region: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '密码长度在6到20个字符',
            trigger: 'blur',
          },
        ],
        test: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  float: left;
}

/*去除超链接格式*/
a:visited,
a:hover,
a {
  text-decoration: none;
}

/* 整体框架 */
.content {
  width: 100%;
  background: url(./images/login.jpeg) center center / cover no-repeat;
  .login {
    /* 输入框界面 */
    margin: auto;
    width: 1150px;
    /* 我是会员和注册部分 */
    .usertype {
      padding-top: 100px;
      margin: 0 auto;
      width: 385px;
      height: 25px;
      /* background-color: rgb(0, 255, 170); */
      display: flex;
      justify-content: space-around;
      .vip {
        float: left;
        display: flex;
        .vipimg {
          width: 27px;
          height: 27px;
          float: left;
        }
        .vipword {
          padding-left: 10px;
          color: white;
          font-size: 19px;
          height: 27px;
        }
      }
      .signin {
        float: left;
        display: flex;
        .signinimg {
          float: left;
        }
        .signinword {
          padding-left: 10px;
          font-size: 19px;
          height: 27px;
          color: white;
        }
      }
    }
    .login-content {
      position: relative;
      margin: auto;
      height: 470px;
      width: 420px;
      /* background-color: darkslategray; */
      padding-top: 30px;
      .test-img {
        position: absolute;
        top: 0;
        right: -160px;
        width: 100px;
        height: 40px;
        background-color: #888888;
      }
      .el-form {
        margin-top: 20px;
      }
      /* 第三方账号登录区域 */
      .third-party {
        margin: 10px 30px;
        height: auto;
        width: 387px;
        // background-color: coral;
        position: relative;
        /* 第三方账号登录文本标题 */
        .title {
          display: flex;
          margin-left: 16px;
          .third-party-title-hr {
            position: relative;
            width: 115px;
            height: 0px;
            top: 8px;
            border: 1px solid white;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
            float: left;
          }
          .third-party-login {
            padding-left: 20px;
            padding-right: 20px;
            color: white;
          }
        }
        /* 登录列表 */
        .three-party-ul {
          margin: auto;
          width: 200px;
          height: 50px;
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
        }
      }
      /* 隐私政策 */
      .private {
        margin-top: 35px;
        margin-left: 180px;
        font-size: small;
        color: white;
      }
      .login-button {
        position: relative;
        padding-top: 20px;
        text-align: center;
        line-height: 50px;
        width: 100%;
        height: 50px;
      }
    }
  }
}
</style>
