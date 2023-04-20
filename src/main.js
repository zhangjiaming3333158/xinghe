import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as THREE from 'three';

import router from './router'

import Bottom from './components/Bottom.vue'
import Nav from './components/Nav.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component('Bottom', Bottom)
Vue.component('Nav', Nav)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
