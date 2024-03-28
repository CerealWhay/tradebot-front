<script setup lang="ts">
// components
import UiWrapper from "@/ui/UiWrapper/UiWrapper.vue";
</script>

<template>
  <div class="auth-wrapper">
    <div class="auth-wrapper__wrapper">
      <UiWrapper class="auth-wrapper__description">
        <slot name="description" />
      </UiWrapper>
      <UiWrapper class="auth-wrapper__form">
        <slot name="form" />
      </UiWrapper>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media-queries" as media;

.auth-wrapper {
  width: 100%;

  &__wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;

    border: 1px solid var(--surface-200);
    border-radius: var(--global-gap);
  }

  &__description {
    border-right-width: 1px;
    border-color: var(--surface-200);
  }

  &__form {
    width: 100%;
  }

  @include media.md-max {
    &__wrapper {
      display: block;
    }

    &__description {
      border-right-width: 0;
      border-bottom-width: 1px;
    }
  }
}
</style>
