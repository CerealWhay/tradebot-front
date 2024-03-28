import {
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
} from "vue-router";

export type DataType = Record<never, never> | null;
export type ParamsType = Record<never, never> | undefined;
export type DirectionType = "top" | "left" | "bottom" | "right";
export type ToastType = "success" | "info" | "warn" | "error";
export type ScreenWidthType = "isSM" | "isMD" | "isLG" | "isXL" | "isXXL";
export type LayoutType = "main" | "auth" | "empty";

export interface RouterContext {
  to: RouteLocationNormalized;
  from: RouteLocationNormalized;
  next: NavigationGuardNext;
  router: Router;
}
export type MiddlewareFuncType = (T: RouterContext) => void;
