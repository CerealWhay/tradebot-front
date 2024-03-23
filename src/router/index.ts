import { createWebHistory, createRouter } from "vue-router";
import { AccountMain } from "@/modules/account";
import { Main } from "@/modules/main";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/account",
    name: "AccountMain",
    component: AccountMain,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
