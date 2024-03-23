<script setup lang="ts">
import { useMainLayoutStore } from "@/store/mainLayout.ts";
import SidebarContent from "@/components/SidebarContent";
const layoutStore = useMainLayoutStore();
</script>

<template>
  <div class="mobile-sidebar">
    <Sidebar v-model:visible="layoutStore.isSidebarOpen">
      <template #container="{ closeCallback }">
        <SidebarContent />

        <Button
          icon="pi pi-bars"
          @click="closeCallback"
        />
      </template>
    </Sidebar>
  </div>
</template>

<style scoped lang="scss">
.mobile-sidebar {
  width: 100%;
}
</style>
