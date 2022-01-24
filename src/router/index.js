import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () =>
      import("../views/Index.vue"),
  },
  {
    path: "/search",
    name: "Search",
    props: route => ({ query: route.query.search}),
    component: () =>
      import("../views/Search.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
