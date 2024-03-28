import { AccountMain } from "@/modules/Account";
import { isAuthMiddleware } from "@/middlewares/isAuth";

export const accountRoutes = [
  {
    path: "/account",
    name: "AccountMain",
    component: AccountMain,
    meta: {
      middleware: [isAuthMiddleware],
    },
  },
];
