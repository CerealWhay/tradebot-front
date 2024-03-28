<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <div class="not-found__404">
      {{ $t("404.404") }}
    </div>
    <div class="not-found__text">
      {{ $t("404.text") }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media-queries" as media;

.not-found {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 10rem;

  &__404 {
    font-size: 5rem;
  }

  &__text {
    font-size: 3rem;
  }

  @include media.md-max {
    padding: 5rem;
  }

  @include media.sm-max {
    padding: 3rem;

    &__404 {
      font-size: 3rem;
    }

    &__text {
      font-size: 2rem;
    }
  }
}
</style>
