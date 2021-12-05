import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Classrooms from "../views/Classrooms.vue";
import About from "../views/About.vue";
import Newspaper from "../views/Newspaper.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/classrooms",
    name: "Classrooms",
    component: Classrooms,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/newspaper",
    name: "Newspaper",
    component: Newspaper,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
