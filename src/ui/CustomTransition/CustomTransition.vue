<script setup lang="ts">
import { computed } from "vue";
import { Props, transitionComponents } from "./index.ts";
import type { Component } from "vue";

const props = withDefaults(defineProps<Props>(), {
  type: "fade",
});

const selectedComponent = computed<Component>(
  () => transitionComponents[props.type],
);
</script>

<template>
  <Component
    :is="selectedComponent"
    v-bind="props"
  >
    <slot />
  </Component>
</template>

<style scoped lang="scss"></style>
