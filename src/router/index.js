import Vue from "vue";
import VueRouter from "vue-router";
import AuthView from "../views/AuthView.vue";
import ProjectBrowserView from "../views/ProjectBrowserView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/authRedirect",
    name: "authRedirect",
    component: () => import("../views/AuthRedirectView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/project",
    name: "projectBrowser",
    component: ProjectBrowserView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
