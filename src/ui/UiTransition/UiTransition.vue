<script setup lang="ts">
import { computed } from "vue";

// types
import { Props, transitionComponents } from "./";
import type { Component } from "vue";

// props
const props = withDefaults(defineProps<Props>(), {
  type: "fade",
});

// computed
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
