<script setup lang="ts">
// components
import Toast from "primevue/toast";
import FinalLayout from "@/layouts/FinalLayout.vue";
</script>

<template>
  <div class="app">
    <FinalLayout>
      <RouterView v-slot="{ Component }">
        <Component :is="Component" />
      </RouterView>
    </FinalLayout>
  </div>

  <Toast />
</template>

<style lang="scss" scoped></style>
