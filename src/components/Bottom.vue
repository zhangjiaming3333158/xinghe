<template>
  <div class="bottom-container">
    <div class="top">
      <img src="@/assets/bilibili.png" alt="" />
      <img src="@/assets/QQ.png" alt="" />
      <img src="@/assets/facebook.png" alt="" />
      <img src="@/assets/wechat.png" alt="" />
      <img src="@/assets/email.png" alt="" />
      <img src="@/assets/phone.png" alt="" />
    </div>
    <div class="nav_foot">
      <span class="nfc db">
        <a href="/sitemap.html"> 网站地图</a>&nbsp;&nbsp;<a
          href="/bottom/friend"
        >
          相关链接</a
        >&nbsp;&nbsp;<a href="/bottom/apply_image" target="_blank"> 影像授权</a
        >&nbsp;&nbsp;<a href="/bottom/privacy/252" target="_blank"> 隐私政策</a
        >&nbsp;&nbsp; </span
      ><span class="nfc db">
        <a href="/bottom/privacy/236341.html" target="_blank"> 版权声明</a
        >&nbsp;&nbsp;<a href="/bottom/ask"> 留言板</a>&nbsp;&nbsp;<a
          href="https://www.dpm.org.cn/singles_detail/252829.html"
        >
          联系我们</a
        >&nbsp;&nbsp;<a href="/bottom/aboutus.html" target="_blank"> 关于我们</a
        >&nbsp;&nbsp;
      </span>
    </div>
    <div class="company">网站建设：星禾文化传播有限公司</div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
}
</script>

<style lang="less" scoped>
.bottom-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .top {
    margin: auto;
    width: 100%;
    height: 100px;
    text-align: center;
    background-color: #272727;
    img {
      margin: 10px 20px;
      width: 100px;
      height: 100px;
    }
  }
  .nav_foot {
    margin: auto;
    padding-top: 30px;
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: #272727;
    color: #fff;
    font-size: 12px;
  }
  .bottom_foot {
    margin: auto;
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: #272727;
    color: #666;
    font-size: 12px;
  }
  .company {
    margin: auto;
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: #272727;
    color: #666;
    font-size: 12px;
  }
}
</style>
