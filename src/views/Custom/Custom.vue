<template>
  <div class="custom-container">
    <div class="top">
      <div class="name">
        <div>xxxxxxxxxxxxxx</div>
        <div>$</div>
      </div>
      <div id="webgl" style="margin-left: 320px"></div>
    </div>
    <div class="bottom">
      <div class="mesh-button">
        <el-button circle style="position: absolute; top: 20px; left: 500px"
          ><el-icon><ArrowLeft /></el-icon
        ></el-button>
        <div class="mesh-name">贴图名字</div>
        <el-button circle style="position: absolute; top: 20px; left: 900px"
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

<!-- <script>
import * as THREE from 'three'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
} from 'three'
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
export default {
  name: 'Custom',
  mounted() {
    let scene = new Scene()
    //设置背景颜色
    scene.background = new THREE.Color(0xf6f6f6)
    //设置网格辅助线
    // scene.add( new THREE.GridHelper( 400, 10 ) );
    // AxesHelper：辅助观察的坐标系
    // const axesHelper = new THREE.AxesHelper(150)
    // scene.add(axesHelper)
    const textureCube = new THREE.CubeTextureLoader()
      .setPath('/img/')
      .load(['background.png'])
    // new THREE.MeshStandardMaterial({
    //   metalness: 1.0,
    //   roughness: 0.5,
    //   envMap: textureCube, //设置pbr材质环境贴图
    // });
    // textureCube.encoding = THREE.sRGBEncoding;
    let Width = 800
    let Height = 430
    let camera = new PerspectiveCamera(20, Width / Height, 1, 1000)
    //相机在Three.js三维坐标系中的位置
    // 根据需要设置相机位置具体值
    camera.position.set(0, 0, 35)
    // camera.lookAt(1000, 500, 10000)
    let loader = new GLTFLoader() /*实例化加载器*/
    let renderer = new WebGLRenderer({ alpha: true })
    renderer.setSize(Width, Height)
    let app = document.getElementById('webgl')
    app.appendChild(renderer.domElement)
    //加载模型
    loader.load(
      'gltf/gril.glb',
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
        console.log('load error!' + error)
      }
    )
    //加载场景控制插件
    let controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = true
    controls.autoRotate = false
    controls.autoRotateSpeed = 3
    controls.enablePan = true
    controls.enableKeys = true
    controls.keyPanSpeed = 7
    controls.minDistance = 15
    controls.maxDistance = 35
    controls.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40,
    }
    this.controls = controls
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

    const texLoader = new THREE.TextureLoader()
    const texture = texLoader.load('img/logo.png') // 加载手机mesh另一个颜色贴图
    texture.encoding = THREE.sRGBEncoding //和渲染器.outputEncoding一样值

    // this.meshloader();
    animate()
  },
  methods: {
    meshloader() {
      let loader = new GLTFLoader() /*实例化加载器*/
      const texLoader = new THREE.TextureLoader()
      const texture = texLoader.load('img/logo.png') // 加载手机mesh另一个颜色贴图
      // texture.encoding = THREE.sRGBEncoding //和渲染器.outputEncoding一样值
      loader.load('gltf/gril.glb', function (gltf) {
        const mesh = gltf.scene.children[0] //获取Mesh
        mesh.material.map = texture //更换不同风格的颜色贴图
        console.log(1)
      })
    },
  },
}
</script> -->

<script setup>
import * as THREE from 'three'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
} from 'three'
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { onMounted } from 'vue'

const meshloader = () => {
  let loader = new GLTFLoader() /*实例化加载器*/
  const texLoader = new THREE.TextureLoader()
  const texture = texLoader.load('img/logo.png') // 加载手机mesh另一个颜色贴图
  // texture.encoding = THREE.sRGBEncoding //和渲染器.outputEncoding一样值
  loader.load('gltf/gril.glb', function (gltf) {
    const mesh = gltf.scene.children[0] //获取Mesh
    mesh.material.map = texture //更换不同风格的颜色贴图
    console.log(1)
  })
}
onMounted(() => {
  let scene = new Scene()
  //设置背景颜色
  scene.background = new THREE.Color(0xf6f6f6)
  //设置网格辅助线
  // scene.add( new THREE.GridHelper( 400, 10 ) );
  // AxesHelper：辅助观察的坐标系
  // const axesHelper = new THREE.AxesHelper(150)
  // scene.add(axesHelper)
  const textureCube = new THREE.CubeTextureLoader()
    .setPath('/img/')
    .load(['background.png'])
  // new THREE.MeshStandardMaterial({
  //   metalness: 1.0,
  //   roughness: 0.5,
  //   envMap: textureCube, //设置pbr材质环境贴图
  // });
  // textureCube.encoding = THREE.sRGBEncoding;
  let Width = 800
  let Height = 430
  let camera = new PerspectiveCamera(
    20, //视野角度
    Width / Height, //长宽比
    1,//近截面
    1000//远截面
  )
  //相机在Three.js三维坐标系中的位置
  // 根据需要设置相机位置具体值
  camera.position.set(0, 0, 35)
  // camera.lookAt(1000, 500, 10000)
  let loader = new GLTFLoader() /*实例化加载器*/
  let renderer = new WebGLRenderer({ alpha: true })
  renderer.setSize(Width, Height)
  let app = document.getElementById('webgl')
  app.appendChild(renderer.domElement)
  //加载模型
  loader.load(
    'gltf/gril.glb',
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
      console.log('load error!' + error)
    }
  )
  //加载场景控制插件
  let controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = true
  controls.autoRotate = false
  controls.autoRotateSpeed = 3
  controls.enablePan = true
  controls.enableKeys = true
  controls.keyPanSpeed = 7
  controls.minDistance = 15
  controls.maxDistance = 35
  controls.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40,
  }
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

  const texLoader = new THREE.TextureLoader()
  const texture = texLoader.load('img/logo.png') // 加载手机mesh另一个颜色贴图
  texture.encoding = THREE.sRGBEncoding //和渲染器.outputEncoding一样值

  // this.meshloader();
  animate()
})
</script>

<style lang="less" scoped>
.custom-container {
  width: 100%;
  height: 100%;
  .top {
    margin: auto;
    position: relative;
    width: 100%;
    height: 430px;
    background-color: #f6f6f6;
    .name {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50px;
      left: 50px;
      font-size: 20px;
    }
  }
  .bottom {
    width: 100%;
    height: 200px;
    .mesh-button {
      position: relative;
      margin: auto;
      padding-top: 20px;
      text-align: center;
      width: 100%;
      height: 70px;
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
      margin: auto;
      text-align: center;
    }
  }
}
</style>
