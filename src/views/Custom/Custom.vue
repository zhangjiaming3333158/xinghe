<template>
  <div class="custom-container">
    <div class="top">
      <div class="name">
        <div>服饰</div>
        <div>19.9$</div>
      </div>
      <div id="webgl"></div>
    </div>
    <div class="bottom">
      <div class="mesh-button">
        <el-button circle
          ><el-icon><ArrowLeft /></el-icon
        ></el-button>
        <div class="mesh-name">贴图名字</div>
        <el-button circle
          ><el-icon><ArrowRight /></el-icon
        ></el-button>
      </div>
      <div class="mesh-list" ref="mesh">
        <el-button
          round
          style="width: 150px; color: black; font-size: 16px"
          @click="meshloader"
          >贴图1</el-button
        >
        <el-button round style="width: 150px; color: black; font-size: 16px"
          >贴图2</el-button
        >
        <el-button round style="width: 150px; color: black; font-size: 16px"
          >贴图3</el-button
        >
        <el-button round style="width: 150px; color: black; font-size: 16px"
          >贴图4</el-button
        >
        <el-button round style="width: 150px; color: black; font-size: 16px"
          >贴图5</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import * as THREE from 'three'
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// 导入lil.gui库
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { onMounted, ref } from 'vue'

let Width = 800 //窗口宽度
let Height = 430 //窗口高度

// 创建事件对象
let eventObj = {
  // 进入全屏
  fullScreen: function () {
    let el = document.getElementById('webgl') // 获取dom元素
    document.body.requestFullscreen().then(() => {
      // 进入全屏后的回调
      Width = window.innerWidth
      Height = window.innerHeight
    })
    // 添加按ESC键退出全屏时的事件监听器
    document.addEventListener('fullscreenchange', function () {
      if (!document.fullscreenElement) {
        // 退出全屏后的回调
        Width = 800
        Height = 430
      }
    })
  },
  // 退出全屏
  exitScreen: function () {
    if (!document.fullscreenElement) return
    Width = 800 //窗口宽度
    Height = 430 //窗口高度
    document.exitFullscreen() //退出全屏
  },
}
// 创建GUI对象
// const renderGui = () => {
//   let gui = new GUI()
//   gui.add(eventObj, 'fullScreen').name('进入全屏') //添加全屏按钮
//   gui.add(eventObj, 'exitScreen').name('退出全屏') //添加全屏按钮
// }
// renderGui()

const meshloader = () => {
  let loader = new GLTFLoader() /*实例化加载器*/
  const texLoader = new THREE.TextureLoader()
  const texture = texLoader.load('img/logo.png') // 加载手机mesh另一个颜色贴图
  // texture.encoding = THREE.sRGBEncoding //和渲染器.outputEncoding一样值
  loader.load('gltf/gril.glb', function (gltf) {
    const mesh = gltf.scene.children[0] //获取Mesh
    mesh.material.map = texture //更换不同风格的颜色贴图
  })
}

onMounted(() => {
  // 创建场景
  let scene = new THREE.Scene()
  //设置背景颜色
  scene.background = new THREE.Color(0xf6f6f6)

  //创建相机
  let camera = new THREE.PerspectiveCamera(
    20, //视野角度
    Width / Height, //长宽比
    1, //近截面
    1000 //远截面
  )
  //设置相机位置
  camera.position.set(0, 0, 35) //x:右侧为正，y:上侧为正，z:屏幕内为正
  //相机焦点位置
  camera.lookAt(0, 0, 0)

  // 创建渲染器
  let renderer = new THREE.WebGLRenderer({ alpha: true })
  // 设置渲染器为窗口的内宽度和内高度
  renderer.setSize(Width, Height)

  //加载场景控制插件
  let controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true //是否开启惯性
  controls.dampingFactor = 0.05 //惯性阻尼系数
  controls.enableZoom = true //是否可以缩放
  controls.autoRotate = false //是否自动旋转
  controls.autoRotateSpeed = 3 //自动旋转速度
  controls.enablePan = true //是否开启右键拖拽
  controls.enableKeys = true //是否开启键盘控制
  controls.keyPanSpeed = 7 //键盘移动速度
  controls.minDistance = 15 //最小缩放值
  controls.maxDistance = 35 //最大缩放值
  // 键盘控制
  controls.keys = {
    LEFT: 37, //左键
    UP: 38, //上键
    RIGHT: 39, //右键
    BOTTOM: 40, //下键
  }

  // loader 实例化加载器
  let loader = new GLTFLoader()
  // 加载gltf模型
  loader.load(
    'gltf/gril.glb', //模型路径
    function (obj) {
      console.log(obj)
      obj.scene.position.y = -4
      scene.add(obj.scene)
      // 查看gltf所有颜色贴图的.encoding值
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    function (error) {
      ElMessage.error('load error!' + error)
    }
  )

  //点光源
  // const pointLight1 = new THREE.PointLight(0xffffff, 1.0)
  // pointLight1.position.set(0, 0, -100) //点光源位置
  // scene.add(pointLight1) //点光源添加到场景中

  //环境光
  // const light = new THREE.AmbientLight(0xffffff)
  // scene.add(light)

  //平行光
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight.position.set(0, 0, 200)
  scene.add(directionalLight) //点光源添加到场景中

  //平行光
  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight2.position.set(0, 0, -200)
  scene.add(directionalLight2) //点光源添加到场景中

  //平行光
  const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight3.position.set(100, 0, 0)
  scene.add(directionalLight3) //点光源添加到场景中

  //平行光
  const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight4.position.set(-100, 0, 0)
  scene.add(directionalLight4) //点光源添加到场景中

  //平行光
  const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight5.position.set(-0, 1000, 0)
  scene.add(directionalLight5) //点光源添加到场景中

  //渲染场景
  let animate = function () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()

  // 渲染器输出的canvas对象添加到dom元素中
  let app = document.getElementById('webgl')
  app.appendChild(renderer.domElement)

  // 窗口变动触发的函数
  window.onresize = function () {
    // 重置渲染器输出画布canvas尺寸
    renderer.setSize(Width, Height)
    // 重置相机投影矩阵效果
    camera.aspect = Width / Height
    camera.updateProjectionMatrix()
  }

  //设置网格辅助线
  // scene.add( new THREE.GridHelper( 400, 10 ) );

  // AxesHelper：辅助观察的坐标系
  // 参数：size：坐标系大小
  // const axesHelper = new THREE.AxesHelper(100)
  // scene.add(axesHelper)

  // 立方体贴图
  // const textureCube = new THREE.CubeTextureLoader()
  //   .setPath('/img/')
  //   .load(['background.png'])
  // scene.background = textureCube
})
</script>

<style lang="less" scoped>
.custom-container {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    justify-content: center;
    align-items: start;
    position: relative;
    width: 100%;
    height: 70%;
    background-color: #f6f6f6;
    .name {
      margin-top: 20px;
      width: 30%;
      height: 100px;
      font-size: 20px;
      text-align: center;
      line-height: 200%;
    }
    #webgl {
      width: 100%;
      position: relative;
    }
  }
  .bottom {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    .mesh-button {
      display: flex;
      justify-content: center;
      padding-top: 20px;
      text-align: center;
      width: 100%;
      height: 30%;
      .mesh-name {
        // margin-left: 60px;
        height: 40px;
        width: 400px;
        line-height: 40px;
        display: inline;
        text-align: center;
        font-size: 20px;
      }
    }
    .mesh-list {
      height: 70%;
      text-align: center;
    }
  }
}
</style>
