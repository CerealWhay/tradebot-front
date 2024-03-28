<script setup lang="ts">
// store
import { useMainLayoutStore } from "../store";
import { useScreenSizeStore } from "@/store/screenSize";
import { useAuthStore } from "@/modules/Auth";
const layoutStore = useMainLayoutStore();
const screenSizeStore = useScreenSizeStore();
const authStore = useAuthStore();
</script>

<template>
  <div class="main-header">
    <div class="main-header__part">
      <div
        v-if="screenSizeStore.screenWidthController.isLG"
        class="main-header__burger"
      >
        <Button
          icon="pi pi-bars"
          @click="layoutStore.isSidebarOpen = true"
        />
      </div>
      <div class="main-header__content">header</div>
    </div>
    <div class="main-header__part">
      <Button
        :label="$t('mainLayout.logout')"
        icon="pi pi-sign-out"
        @click="authStore.logout"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-header {
  width: 100%;

  display: flex;
  align-items: center;
  gap: var(--global-gap);
  justify-content: space-between;

  &__part {
    display: flex;
    align-items: center;
    gap: var(--global-gap);
  }
}
</style>
