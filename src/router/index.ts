import { createWebHistory, createRouter } from "vue-router";
import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { MiddlewareFuncType, RouterContext } from "@/types";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

function nextFactory(
  context: RouterContext,
  middlewares: Array<MiddlewareFuncType>,
  index: number,
) {
  const subsequentMiddleware = middlewares[index];
  if (!subsequentMiddleware) {
    return context.next;
  }
  return () => {
    const nextMiddleware = nextFactory(context, middlewares, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    if (to.meta.middleware) {
      const middlewares = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];

      const context: RouterContext = {
        from,
        next,
        router,
        to,
      };
      const nextMiddleware = nextFactory(context, middlewares, 1);

      return middlewares[0]({ ...context, next: nextMiddleware });
    }

    return next();
  },
);
