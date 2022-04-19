import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// 按照需求可加，防止添加同一个路由页面不渲染
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: { requireLogin: true, role: 0 }, //requireLogin是否需要登陆，role是否支持试玩
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
  // {
  //   path: '/me',
  //   name: 'Me',
  //   component: Me,
  //   children: [
  //     {
  //       path: 'collection',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
  //       name: 'Collection',
  //       component: Collection
  //     },
  //     {
  //       path: 'trace',
  //       name: 'Trace',
  //       component: Trace
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  mode: "hash",
  routes
});
router.beforeEach((to, from, next) => {
  // if (to.matched.length ===0) {  //如果未匹配到路由
  //   from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  // } else {
  //   next();    //如果匹配到正确跳转
  // }
  if (to.meta.requireLogin) {
    console.log("我要进入到", to.name);
    // 判断是否登录
    // if (true){
    // if (isLog) {
    next(true);
    // } else {
    // 如果没有登录跳转login 后面加一个条件redirect 等于要去的页面的地址 （方便登录成功后返回原页面）
    // next('/login?redirect=' + to.path)

    //   sessionStorage.setItem('referrer', from.path) //储存来源路由，可以实现登陆后跳转
    //   var referrer = sessionStorage.getItem('referrer');
    //   if (referrer != null) {
    //     this.$router.push(referrer)
    //   } else {
    //     this.$router.push('/home')
    //   }
    //   next('/login?redirect=' + to.path)
    // }
  } else {
    next();
  }
});

export default router;
