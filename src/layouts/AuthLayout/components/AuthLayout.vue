<script setup lang="ts"></script>

<template>
  <div class="auth-layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/media-queries" as media;

.auth-layout {
  height: 100vh;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem var(--global-gap);

  margin: 0 auto;
  max-width: var(--screen-size-lg);

  @include media.sm-max {
    --global-gap: 0.75rem;
  }
}
</style>
