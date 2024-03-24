<script setup lang="ts">
// components
import { MainLayout } from "@/layouts/MainLayout";
import Toast from "primevue/toast";
</script>

<template>
  <div class="app">
    <MainLayout>
      <RouterView v-slot="{ Component }">
        <Component :is="Component" />
      </RouterView>
    </MainLayout>
  </div>

  <Toast />
</template>

<style lang="scss" scoped></style>
