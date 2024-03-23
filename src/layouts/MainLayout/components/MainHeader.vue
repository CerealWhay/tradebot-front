<script setup lang="ts">
// store
import { useMainLayoutStore } from "@/layouts/MainLayout/store";
const layoutStore = useMainLayoutStore();
</script>

<template>
  <div class="main-header">
    <div
      v-if="layoutStore.screenWidthController.isLG"
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
  gap: var(--global-gap);
}
</style>
