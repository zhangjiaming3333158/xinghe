<template>
  <div class="box1_1_2">
    <!-- <img class="box1_1_2" src="../img/box1_1_2.png" alt="" /> -->
    <div id="webgl" ref="webgl"></div>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'

const webgl = ref(null) // 获取dom元素(透明度)

const Height = 390 //窗口高度
const Width = 804 //窗口宽度
//纹理贴图
const texture = (url) => {
  // 纹理贴图
  let textureLoader = new THREE.TextureLoader()
  let texture = textureLoader.load(url)
  texture.colorSpace = THREE.LinearSRGBColorSpace
  return texture
}

onMounted(() => {
  // 创建场景
  let scene = new THREE.Scene()
  //设置背景颜色
  scene.background = new THREE.Color(0xffffff)
  //创建相机
  let camera = new THREE.PerspectiveCamera(
    83, //视野角度
    Width / Height, //长宽比
    0.1, //近截面
    100 //远截面
  )
  camera.position.set(0, 0, 6) //相机位置

  let renderer = new THREE.WebGLRenderer({ antialias: true })
  // 设置渲染器为窗口的内宽度和内高度
  renderer.setSize(Width, Height)
  // 渲染像素比
  renderer.setPixelRatio(window.devicePixelRatio) //防止模糊

  // 添加dom
  webgl.value.appendChild(renderer.domElement)

  //渲染平面
  let geometry = new THREE.PlaneGeometry(21.6, 10.8)

  //webgl监听鼠标移动
  let mouse = new THREE.Vector2()
  webgl.value.addEventListener('mousemove', (e) => {
    mouse.x = -(e.clientX / Width) * 2 + 1
    mouse.y = (e.clientY / Height) * 2 - 1
  })
  //webgl监听鼠标离开
  webgl.value.addEventListener('mouseout', (e) => {
    mouse.x = 0
    mouse.y = 0
  })

  // 着色器材质
  let material = new THREE.ShaderMaterial({

    // 顶点着色器
    uniforms: {
      uTexture: { value: texture('/img/box1_1_2.png') },
      uDepthTexture: { value: texture('/img/box1_1_2_depth.jpg') },
      uMouse: { value: mouse },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D uTexture;
        uniform sampler2D uDepthTexture;
        uniform vec2 uMouse;
        varying vec2 vUv;
        void main() {
            vec4 color = texture(uTexture, vUv);
            vec4 depth = texture(uDepthTexture, vUv);
            float depthValue = depth.r;
            float x = vUv.x + uMouse.x * 0.02 * depthValue;
            float y = vUv.y + uMouse.y * 0.02 * depthValue;
            vec4 color2 = texture(uTexture, vec2(x, y));

            // 调整颜色，例如增加亮度
            color2 = color2 * 1.1; // 增加亮度
          
            gl_FragColor = color2;
        }
    `,
  })

  let plane = new THREE.Mesh(geometry, material)
  scene.add(plane)

  //渲染画布
  let animate = function () {
    material.uniforms.uMouse.value = mouse
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<style scoped lang="less">
.box1_1_2 {
  margin-top: -20px;
  width: 100%;
  height: 390px;
  border-radius: 10px;
  #webgl {
    width: 100%;
    height: 390px;
    border-radius: 10px;
  }
}
</style>
