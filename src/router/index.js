import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/experiences",
    name: "experiences",
    component: () => import("../pages/ExperiencesPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
