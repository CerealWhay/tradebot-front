import { accountRoutes } from "./account";
import { authRoutes } from "./auth";
import { mainRoutes } from "./main";
import NotFound from "@/pages/NotFound.vue";

export const routes = [
  ...authRoutes,
  ...mainRoutes,
  ...accountRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { layout: ["empty"] },
  },
];
