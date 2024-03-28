import { defineStore } from "pinia";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { ScreenWidthType } from "@/types";

export const useScreenSizeStore = defineStore("screenSize", () => {
  const { width: screenWidth } = useWindowSize();

  const screenWidthController = computed<Record<ScreenWidthType, boolean>>(
    () => ({
      isSM: checkSizing("--screen-size-sm"),
      isMD: checkSizing("--screen-size-md"),
      isLG: checkSizing("--screen-size-lg"),
      isXL: checkSizing("--screen-size-xl"),
      isXXL: checkSizing("--screen-size-xxl"),
    }),
  );

  function checkSizing(cssSize: string): boolean {
    return (
      screenWidth.value <=
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(cssSize),
      )
    );
  }

  return {
    screenWidthController,
  };
});
