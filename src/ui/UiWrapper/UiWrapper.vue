<template>
  <div class="ui-wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/media-queries" as media;

.ui-wrapper {
  padding: var(--global-gap);
}
</style>
