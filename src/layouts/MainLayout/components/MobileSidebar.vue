<script setup lang="ts">
// components
import SidebarContent from "@/components/SidebarContent.vue";
import UiWrapper from "@/ui/UiWrapper";

// store
import { useMainLayoutStore } from "@/layouts/MainLayout/store";
const layoutStore = useMainLayoutStore();
</script>

<template>
  <Sidebar
    v-model:visible="layoutStore.isSidebarOpen"
    class="mobile-sidebar"
    style="width: var(--sidebar-width)"
  >
    <template #container="{ closeCallback }">
      <div class="mobile-sidebar__container">
        <UiWrapper>
          <SidebarContent />

          <Button
            icon="pi pi-bars"
            @click="closeCallback"
          />
        </UiWrapper>
      </div>
    </template>
  </Sidebar>
</template>

<style scoped lang="scss">
.mobile-sidebar {
  &__container {
    height: 100%;
    background: var(--primary-50);

    border-right-width: 1px;
    border-color: var(--surface-200);
  }
}
</style>
