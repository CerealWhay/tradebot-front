<script setup lang="ts">
import { computed, ref } from "vue";

// components
import UiTransition from "@/ui/UiTransition";
import UiWrapper from "@/ui/UiWrapper";
import SidebarContent from "@/components/SidebarContent";

// store
import { useMainLayoutStore } from "@/layouts/MainLayout/store";
const layoutStore = useMainLayoutStore();

// data
const isHover = ref<boolean>(false);

// computed
const isShowSidebar = computed<boolean>(() => {
  if (!layoutStore.screenWidthController.isXL) {
    return true;
  } else {
    return Boolean(isHover.value);
  }
});
</script>

<template>
  <div
    class="main-sidebar"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <UiWrapper
      v-if="layoutStore.screenWidthController.isXL"
      class="main-sidebar__plug main-sidebar__wrapper"
    >
      plug
    </UiWrapper>
    <UiTransition
      type="slideIn"
      direction="right"
    >
      <UiWrapper
        v-if="isShowSidebar"
        class="main-sidebar__main main-sidebar__wrapper"
        :class="{
          'main-sidebar__main--hidden': layoutStore.screenWidthController.isXL,
        }"
      >
        <SidebarContent />
      </UiWrapper>
    </UiTransition>
  </div>
</template>

<style scoped lang="scss">
.main-sidebar {
  height: 100%;
  position: relative;

  &__wrapper {
    height: 100%;
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
