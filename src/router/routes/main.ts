import { Main } from "@/modules/Main";
import { isAuthMiddleware } from "@/middlewares/isAuth";

export const mainRoutes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      middleware: [isAuthMiddleware],
    },
  },
];
