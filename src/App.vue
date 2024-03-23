<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <div class="app">
    <MainLayout>
      <RouterView v-slot="{ Component }">
        <Component :is="Component" />
      </RouterView>
    </MainLayout>
  </div>
</template>

<style lang="scss" scoped></style>
