import { LoginPage, RegistrationPage } from "@/modules/Auth";

export const authRoutes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/registration",
    name: "RegistrationPage",
    component: RegistrationPage,
    meta: {
      layout: "auth",
    },
  },
];
