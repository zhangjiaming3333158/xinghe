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
      path: "/show",
      name: "Show",
      component:()=> import("@/views/Show/Show.vue")
    },
    {
      path: "/show3d",
      name: "Show3d",
      component:()=> import("@/views/Show3d/Show3d.vue")
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
    },
    {
      path: "/educate",
      name: "Educate",
      component:()=> import("@/views/Educate/Educate.vue")
    },
    {
      path: "/educate2",
      name: "Educate2",
      component:()=> import("@/views/Educate2/Educate2.vue")
    },
    {
      path: "/travel",
      name: "Travel",
      component:()=> import("@/views/Travel/Travel.vue")
    }
  ]
});