import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LoginPage",
      component: () => import("../Pages/LoginPage.vue"),
    },
    // {
    //   path: "/login",
    //   name: "LoginPage",
    //   component: () => import("../MainPages/LoginPage.vue"),
    // },
    // {
    //   path: "/register",
    //   name: "RegisterPage",
    //   component: () => import("../MainPages/RegisterPage.vue"),
    // },

    // {
    //   path: "/home",
    //   name: "Home",
    //   component: () => import("../MainPages/Home.vue"),
    // },

    // {
    //   path: "/admin",
    //   name: "Admin",
    //   component: () => import("../MainPages/Administrator.vue"),
    // },

    // {
    //   path: "/teamlead",
    //   name: "TeamLead",
    //   component: () => import("../MainPages/TeamLead.vue"),
    // },
    // {
    //   path: "/SendMail",
    //   name: "SendMail",
    //   component: () => import("../MainPages/SendMail.vue"),
    // },
  ],
});
export default router;
