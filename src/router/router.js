import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  
  {
    path: "/guardar",
    component: () => import("../pages/EstudiantePage.vue"),
  },
  {
    path: "/token",
    component: () => import("../pages/GenerarTokenPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/NoEncontrado.vue"),
  },
  {
    path: "/",
    component: () => import("../pages/BienvenidoPage.vue"),
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
