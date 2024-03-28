import type { RouterContext } from "@/types";
import { useAuthStore } from "@/modules/Auth";

export const isAuthMiddleware = ({ next, router }: RouterContext) => {
  const authStore = useAuthStore();

  if (authStore.isSignedIn()) {
    return next();
  }

  router.push({ name: "LoginPage" });
};
