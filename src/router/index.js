import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RefeicoesView from "@/views/RefeicoesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/refeicoes",
    name: "Refeicoes",
    component: RefeicoesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
