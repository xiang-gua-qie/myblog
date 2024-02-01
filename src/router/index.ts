// 引入路由
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home.vue";
import Login from "@/views/login.vue";
import Exclamation from "@/views/exclamation.vue";

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      component: Exclamation,
    },
  ],
});

// 导出路由
export default router;
