<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import CustomTransition from "@/ui/CustomTransition";
import SidebarContent from "@/components/SidebarContent";

const { width } = useWindowSize();
const triggerWidth = ref<string>("");
const isSmall = ref<boolean>(false);
const isOpen = ref<boolean>(false);

const isShowSidebar = computed<boolean>(() => {
  if (!isSmall.value) {
    return true;
  } else {
    return Boolean(isOpen.value);
  }
});

function initSidebar(screenWidth: number) {
  triggerWidth.value = getComputedStyle(
    document.documentElement,
  ).getPropertyValue("--screen-size-xl");

  isSmall.value = screenWidth <= parseInt(triggerWidth.value);
}

watch(
  () => width,
  (screenWidth) => {
    initSidebar(screenWidth.value);
  },
  { deep: true },
);

onMounted(() => {
  initSidebar(width.value);
});
</script>

<template>
  <div
    class="main-sidebar"
    @mouseover="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <div
      v-if="isSmall"
      class="main-sidebar__plug main-sidebar__wrapper"
    >
      plug
    </div>
    <CustomTransition
      type="slideIn"
      direction="right"
    >
      <div
        v-if="isShowSidebar"
        class="main-sidebar__main main-sidebar__wrapper"
        :class="{ 'main-sidebar__main--hidden': isSmall }"
      >
        <SidebarContent />
      </div>
    </CustomTransition>
  </div>
</template>

<style scoped lang="scss">
.main-sidebar {
  height: 100%;
  position: relative;

  &__wrapper {
    height: 100%;
    padding: var(--layout-padding);
    border-right-width: 1px;
    border-color: var(--surface-200);
  }

  &__plug {
    width: 100%;
  }

  &__main {
    width: var(--sidebar-width);

    &--hidden {
      background: var(--primary-50);
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
