import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import JobsView from "@/views/JobsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      component: JobView,
    },
  ],
});

export default router;
