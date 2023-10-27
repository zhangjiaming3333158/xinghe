import { createApp } from 'vue'
import 'normalize.css'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as THREE from 'three'
import lazyPlugin from 'vue3-lazy'
import App from './App.vue'
import router from './router'
import Bottom from './components/Bottom.vue'
import Nav from './components/Nav.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
//注册全局组件
app.component('Bottom', Bottom)
app.component('Nav', Nav)

app.use(ElementPlus)
// 注册element-plus的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  if (key === 'Bottom' || key === 'Nav') continue
  app.component(key, component)
}
app.use(router)
app.use(lazyPlugin, {
  loading: '@/assets/images/logo.png', // 图片加载时默认图片
  error: '@/assets/logo.png', // 图片加载失败时默认图片
  // 还可以有其他配置
})
app.mount('#app')
