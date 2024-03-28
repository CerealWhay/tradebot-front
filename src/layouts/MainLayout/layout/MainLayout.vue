<script setup lang="ts">
// components
import MainSidebar from "../components/MainSidebar.vue";
import MainHeader from "../components/MainHeader.vue";
import MobileSidebar from "../components/MobileSidebar.vue";
import UiWrapper from "@/ui/UiWrapper";
</script>

<template>
  <div class="main-layout">
    <div class="main-layout__aside">
      <MainSidebar />
    </div>
    <div class="main-layout__main">
      <UiWrapper class="main-layout__header">
        <MainHeader />
      </UiWrapper>
      <UiWrapper class="main-layout__content"><slot /></UiWrapper>
    </div>
  </div>

  <MobileSidebar />
</template>

<style scoped lang="scss">
@use "@/assets/styles/media-queries" as media;

.main-layout {
  --layout-sidebar-width: var(--sidebar-width);

  width: 100%;

  display: flex;

  &__aside {
    height: 100%;
    width: var(--layout-sidebar-width);
    flex-shrink: 0;
    position: fixed;
    z-index: var(--sidebar-z-index);
  }

  &__main {
    width: 100%;
    margin-left: var(--layout-sidebar-width);
  }

  &__header {
    position: sticky;
    top: 0;

    border-bottom-width: 1px;
    border-color: var(--surface-200);

    background: var(--primary-50);
  }

  @include media.xl-max {
    --layout-sidebar-width: 72px;
  }

  @include media.lg-max {
    --layout-sidebar-width: 0px;

    &__aside {
      display: none;
    }
  }

  @include media.sm-max {
    --global-gap: 0.75rem;
  }
}
</style>
