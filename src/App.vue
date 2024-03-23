<script setup lang="ts"></script>

<template>
  <div class="app">
    <RouterView v-slot="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </div>
</template>

<style lang="scss" scoped></style>
