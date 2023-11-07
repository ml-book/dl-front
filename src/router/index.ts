// src/router/router.js
import { createRouter, createWebHistory } from "vue-router";
import Modules from "@/views/Modules.vue";
import Processes from "@/views/Processes.vue";

const routes = [
  {
    path: "/modules",
    name: "Modules",
    component: Modules,
  },
  {
    path: "/processes",
    name: "Processes",
    component: Processes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
