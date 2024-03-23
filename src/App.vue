<script setup lang="ts">
// components
import { MainLayout } from "@/layouts/MainLayout";
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
