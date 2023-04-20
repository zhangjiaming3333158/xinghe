import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home/Home.vue")
    },
    {
      path: "/login",
      name: "Login",
      component:()=> import("@/views/Login/Login.vue")
    },
    {
      path: "/register",
      name: "Register",
      component:()=> import("@/views/Register/Register.vue")
    },
    {
      path: "/custom",
      name: "Custom",
      component:()=> import("@/views/Custom/Custom.vue")
    }
  ]
});