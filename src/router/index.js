import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({ mode: "hash",routes});

export default router;
