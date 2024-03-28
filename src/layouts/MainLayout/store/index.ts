import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainLayoutStore = defineStore("mainLayout", () => {
  const isSidebarOpen = ref<boolean>(false);

  return {
    isSidebarOpen,
  };
});
