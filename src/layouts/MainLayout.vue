<script setup lang="ts">
import MainSidebar from "@/components/MainSidebar";
import MainHeader from "@/components/MainHeader";
import MobileSidebar from "@/components/MobileSidebar";
</script>

<template>
  <div class="main-layout">
    <div class="main-layout__aside">
      <MainSidebar />
    </div>
    <div class="main-layout__main">
      <div class="main-layout__header">
        <MainHeader />
      </div>
      <div class="main-layout__content"><slot /></div>
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
    padding: var(--layout-padding);

    border-bottom-width: 1px;
    border-color: var(--surface-200);

    background: var(--primary-50);
  }

  &__content {
    padding: var(--layout-padding);
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
    --layout-padding: 0.75rem;
  }
}
</style>
