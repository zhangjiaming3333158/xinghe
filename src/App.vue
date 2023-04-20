<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Home from '@/views/Home/Home.vue'
export default {
  components:{
    Home
  }
}
</script>

<style>

</style>