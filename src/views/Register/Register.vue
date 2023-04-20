<template>
  <div class="content">
    <div class="login">
      <div class="usertype">
        <div class="vip">
          <img src="./images/grayimg.png" alt="" class="vipimg">
          <div class="vipword"><router-link to="/login" class="vipword">我是会员</router-link></div>
        </div>
        <div class="signin">
          <img src="./images/lightimg.png" alt="" class="signinimg">
          <div class="signinword"><router-link to="register" class="signinword">还未注册</router-link></div>
        </div>
      </div>

      <div class="login-content">
        <div style="margin-left: -50px;">
          <el-form label-width="100px" :model="formLabelAlign">
            <el-form-item>
              <span slot="label">
                <span style="color: white"><strong>邮箱</strong></span>
              </span>
              <el-input v-model="formLabelAlign.region" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span style="color: white"><strong>密码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span style="color: white"><strong>确认密码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.test" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span style="color: white"><strong>邮箱验证码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.test" placeholder="邮箱验证码"></el-input>
            </el-form-item>
            <el-form-item style="width: 310px;position: relative;">
              <span slot="label">
                <span style="color: white"><strong>验证码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.test" placeholder="验证码"></el-input>
              <div class="test-img"><img src="" alt=""></div>
            </el-form-item>

            <div class="login-button" style="margin: auto;">
              <el-button plain style="position: absolute;top: 15px;left: 190px;width:150px">注册</el-button>
            </div>

          </el-form>
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
  name: 'Register',
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        region: '',
        password: '',
        test: '',
      },
    }
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
  background: url(https://www.dpm.org.cn/Public/static/themes/image/bo/bg17.jpg)
    no-repeat;
  /* background-color: gray; */
}

/* 左上角 "首页 >> 登录" 部分 */
.subject {
  width: 1050px;
  height: 200px;
  margin: auto;
  padding-top: 10px;
  position: relative;
}

.login-page {
  padding-left: 10px;
}

.loginword,
.homepageword {
  color: black;
}

.back-to-home {
  padding-right: 10px;
}

/* 输入框界面 */
.login {
  /* background-color: aqua; */
  margin: auto;
  width: 1150px;
  /* background-color: #000; */
}

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

/* 输入界面 */
.login-content {
  position: relative;
  margin: auto;
  height: 480px;
  width: 420px;
  padding-top: 30px;
  .test-img {
    position: absolute;
    top: 0;
    right: -159px;
    width: 100px;
    background-color: #888888;
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

.email {
  width: 380px;
  height: 40px;
  margin-bottom: 15px;
}

.password {
  width: 380px;
  height: 40px;
  margin-bottom: 15px;
}

.verification {
  margin-bottom: 15px;
  width: 380px;
  height: 40px;
  display: flex;
}

.verification-input {
  width: 320px;
  height: 40px;
}

.verification-code {
  margin-left: 30px;
  width: 90px;
  height: 40px;
}

.email-verification {
  width: 380px;
  height: 40px;
  display: flex;
}

/* 按钮区域 */
.button {
  margin-top: 30px;
  position: relative;
}

.login-btn {
  position: absolute;
  left: 143px;
  color: white;
  background-color: blue;
  border: 2px solid #888888;
  font-size: 10px;
  border-radius: 3px;
  width: 100px;
  height: 40px;
}

/* 隐私政策 */
.private {
  margin: 35px 0 35px 185px;
  font-size: small;
  color: white;
}
</style>