import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "../views/Home/Index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: IndexView,
      children: [
        {
          path: "/",
          name: "chat",
          component: import("@/views/Home/Chat.vue"),
        },
        {
          path: "/contact",
          name: "contact",
          component: import("@/views/Home/Contact.vue"),
        },
        {
          path: "/find",
          name: "find",
          component: import("@/views/Home/Find.vue"),
        },
        {
          path: "/mine",
          name: "mine",
          component: import("@/views/Home/Mine.vue"),
        },
      ],
    },
  ],
});

export default router;
