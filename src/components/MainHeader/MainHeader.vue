<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

import { useMainLayoutStore } from "@/store/mainLayout.ts";
const layoutStore = useMainLayoutStore();

const { width } = useWindowSize();
const triggerWidth = ref<string>("");
const isShowBurger = ref<boolean>(false);

function initHeader(screenWidth: number) {
  triggerWidth.value = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--screen-size-lg");

  isShowBurger.value = screenWidth <= parseInt(triggerWidth.value);
}

watch(
  () => width,
  (screenWidth) => {
    initHeader(screenWidth.value);
  },
  { deep: true },
);

onMounted(() => {
  initHeader(width.value);
});
</script>

<template>
  <div class="main-header">
    <div
      v-if="isShowBurger"
      class="main-header__burger"
    >
      <Button
        icon="pi pi-bars"
        @click="layoutStore.isSidebarOpen = true"
      />
    </div>
    <div class="main-header__content">header</div>
  </div>
</template>

<style scoped lang="scss">
.main-header {
  width: 100%;

  display: flex;
  align-items: center;
  gap: var(--main-gap);
}
</style>
