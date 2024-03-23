import CustomTransition from "./CustomTransition.vue";
import SlideInTransition from "./components/SlideInTransition";
import FadeTransition from "./components/FadeTransition";
import type { Component } from "vue";
import type { DirectionType } from "@/types";

export type transitionType = "fade" | "slideIn";

export const transitionComponents: Record<transitionType, Component> = {
  fade: FadeTransition,
  slideIn: SlideInTransition,
};

export interface Props {
  type: transitionType;
  direction?: DirectionType;
}

export default CustomTransition;
