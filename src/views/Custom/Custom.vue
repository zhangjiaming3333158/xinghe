<template>
  <div class="custom-container">
    <div class="top">
      <div class="name">
        <div>服饰</div>
        <div>19.9$</div>
        <el-select
          v-model="value"
          class="m-2"
          placeholder="Select"
          size="large"
        >
          <el-option
            v-for="item in meshChildrenName"
            :key="item[0]"
            :label="item[0]"
            :value="item"
          />
        </el-select>
      </div>
      <div class="loading-text" ref="loadingText">0%</div>
      <div ref="webglRef" id="webgl"></div>
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
        <div v-for="i in 5">
          <el-button
            round
            style="width: 150px; color: black; font-size: 16px"
            @click="meshloader(i)"
            >贴图1</el-button
          >
          <img class="img" src="/img/background.png"/>
        </div>
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
// 导入RGBELoader.js
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { onMounted, ref } from 'vue'

const webglRef = ref(null) // 获取dom元素(透明度)
const loadingText = ref(null) // 获取dom元素(加载进度)

const meshChildrenName = ref([])
const value = ref('')

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

// 加载贴图
const meshloader = () => {
  console.log(1);
  value.value[1].map = texture()
}

// 设置相机
const Setcamera = (camera) => {
  // 设置相机位置
  camera.position.set(0, 0, 35) //x:右侧为正，y:上侧为正，z:屏幕内为正
  //相机焦点位置
  camera.lookAt(0, 0, 0)
}

// 设置渲染器
const Setrenderer = (renderer) => {
  // 设置渲染器为窗口的内宽度和内高度
  renderer.setSize(Width, Height)
  // 开启阴影效果
  renderer.shadowMap.enabled = true
}

// 设置控制器
const Setcontrols = (controls) => {
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
}

// 加载模型
const loadModel = (loader, scene) => {
  // 加载gltf模型
  loader.load(
    'gltf/gril.glb', //模型路径
    function (obj) {
      console.log(obj)
      obj.scene.traverse(function (child) {
        if (
          child.isMesh &&
          (child.name === '����11' || child.name === '球体')
        ) {
          meshChildrenName.value.push([
            child.name === '球体' ? '饰品' : '上衣',
            child.material,
          ])
        }
      })
      obj.scene.position.y = -4
      // 投射阴影
      obj.scene.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
      scene.add(obj.scene)
      // 查看gltf所有颜色贴图的.encoding值
    },
    function (xhr) {
      // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      // 设置加载进度
      loadingText.value.innerText = `${(xhr.loaded / xhr.total) * 100}%`
      loadingText.value.style.opacity = `${
        1 - ((xhr.loaded / xhr.total) * 100) / 100
      }`
      // 设置背景模糊
      webglRef.value.style.filter = `blur(${
        100 - (xhr.loaded / xhr.total) * 100
      }px)`
    },
    function (error) {
      ElMessage.error('load error!' + error)
    }
  )
}

// 创建屏幕
const createPlane = (scene) => {
  let planeGeometry = new THREE.PlaneGeometry(50, 50) //平面几何体大小
  let planeMaterial = new THREE.MeshStandardMaterial(
    //平面材质
    {
      color: 0xf6f6f6, //平面颜色
      // side: THREE.DoubleSide, //平面两面可见
    }
  ) //平面材质
  let plane = new THREE.Mesh(planeGeometry, planeMaterial) //平面网格
  plane.position.set(0, -5, 0) //平面位置
  plane.rotation.x = -Math.PI / 2 //平面旋转只渲染上面
  plane.receiveShadow = true //开启阴影
  scene.add(plane) //平面添加到场景中
}

// 添加光源
const addLight = (scene) => {
  //点光源
  const pointLight1 = new THREE.PointLight(0xffffff, 1.0)
  pointLight1.position.set(0, 0, -100) //点光源位置
  scene.add(pointLight1) //点光源添加到场景中

  //环境光
  const light = new THREE.AmbientLight(0xffffff)
  scene.add(light)

  //平行光1
  const directionalLight1 = new THREE.DirectionalLight(0xf6f6f6, 4)
  directionalLight1.position.set(0, 2, 4)
  directionalLight1.castShadow = true //开启阴影
  scene.add(directionalLight1) //点光源添加到场景中

  //平行光3
  const directionalLight3 = new THREE.DirectionalLight(0xf6f6f6, 4)
  directionalLight3.position.set(0, 2, -4)
  directionalLight3.castShadow = true //开启阴影
  scene.add(directionalLight3) //点光源添加到场景中
}

//纹理贴图
const texture = () => {
  // 纹理贴图
  let textureLoader = new THREE.TextureLoader()
  let texture = textureLoader.load('/img/background.png')
  return texture
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
  Setcamera(camera) // 设置相机

  // 创建渲染器
  let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  Setrenderer(renderer) // 设置渲染器

  //加载场景控制插件
  let controls = new OrbitControls(camera, renderer.domElement)
  Setcontrols(controls) // 设置控制器

  // loader 实例化加载器
  let loader = new GLTFLoader()
  // 加载gltf模型
  loadModel(loader, scene)

  // 创建屏幕
  createPlane(scene)

  // 添加光源
  addLight(scene)

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
    .loading-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
      color: #fff;
      z-index: 1;
    }
    #webgl {
      width: 100%;
      position: relative;
      filter: blur(0px);
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
      margin: 0 auto;
      height: 300px;
      width: 70%;
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img {
          margin-top: 20px;
          width: 150px;
          height: 50px;
        }
      }
    }
  }
}
</style>
