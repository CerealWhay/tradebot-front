<script setup lang="ts">
import { computed } from "vue";
import type { Component } from "vue";

// components
import { MainLayout } from "@/layouts/MainLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { EmptyLayout } from "@/layouts/EmptyLayout";

// types
import { LayoutType } from "@/types";

// router
import { useRoute } from "vue-router";
const route = useRoute();

// data
const layouts: Record<LayoutType, Component> = {
  main: MainLayout,
  auth: AuthLayout,
  empty: EmptyLayout,
};

// computed
const selectedLayout = computed<Component>(() => {
  const layoutType = route.meta.layout as LayoutType;
  return layouts[layoutType || "main"];
});
</script>

<template>
  <Component :is="selectedLayout">
    <slot />
  </Component>
</template>

<style scoped lang="scss"></style>
