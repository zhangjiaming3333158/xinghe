<template>
  <div class="content">
    <!-- <div class="subject">
      <span class="back-to-home"><router-link class="homepageword">首页</router-link></span>
      >>
      <span class="login-page"><a href="./login.html" class="loginword">登录</a></span>
    </div> -->

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
          <el-form label-width="100px" :model="formLabelAlign" >
            <el-form-item>
              <span slot="label">
                <span style="color: white"><strong>账号</strong></span>
              </span>
              <el-input v-model="formLabelAlign.region" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
              <span slot="label">
                <span style="color: white"><strong>密码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item style="width: 310px;">
              <span slot="label">
                <span style="color: white"><strong>验证码</strong></span>
              </span>
              <el-input v-model="formLabelAlign.test" placeholder="验证码"></el-input>
              <div class="test-img"><img src="" alt=""></div>
            </el-form-item>

            <div class="login-button" style="margin: auto;">
              <el-button plain style="position: absolute;top: 25px;left: 180px;width: 150px;">登录</el-button>
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
            <a href="" class="weibologin"></a>
            <a href="" class="wechatlogin"></a>
            <a href="" class="qqlogin"></a>
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
  // background-color: bisque;
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
  height: 470px;
  width: 420px;
  /* background-color: darkslategray; */
  padding-top: 30px;
  .test-img {
    position: absolute;
    top: 0;
    right: -169px;
    width: 100px;
    background-color: #888888;
  }
  .el-form {
    margin-top: 20px;
  }
}

.account {
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

/* 按钮区域 */
.button {
  margin-top: 30px;
  position: relative;
}

.login-button {
  position: relative;
  padding-top: 20px;
  text-align: center;
  line-height: 50px;
  width: 100%;
  height: 50px;
}

/* 忘记密码 */
.forget-password {
  position: absolute;
  top: 8px;
  left: 280px;
}

/* 第三方账号登录区域 */
.third-party {
  margin: 10px 30px;
  height: auto;
  width: 387px;
  // background-color: coral;
  position: relative;
}

/* 第三方账号登录文本标题 */
.third-party .title {
  display: flex;
  margin-left: 16px;
}

.third-party-title-hr {
  position: relative;
  width: 100px;
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

/* 登录列表 */
.three-party-ul {
  margin: auto;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

/* 登录超链接 */
.three-party-ul a {
  // background-color: palegreen;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 25px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
}

/* 隐私政策 */
.private {
  margin-top: 35px;
  margin-left: 180px;
  font-size: small;
  color: white;
}
</style>
