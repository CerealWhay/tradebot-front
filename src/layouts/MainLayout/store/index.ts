import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useWindowSize } from "@vueuse/core";
import { ScreenWidthType } from "@/layouts/MainLayout/types";

export const useMainLayoutStore = defineStore("mainLayout", () => {
  const { width: screenWidth } = useWindowSize();
  const isSidebarOpen = ref<boolean>(false);

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
    isSidebarOpen,
    screenWidthController,
  };
});
