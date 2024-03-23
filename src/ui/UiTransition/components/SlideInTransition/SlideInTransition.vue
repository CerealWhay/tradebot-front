<script setup lang="ts">
import { computed } from "vue";

// types
import { Props } from "./";

// props
const props = withDefaults(defineProps<Props>(), {
  direction: "top",
});

// computed
const selectedDirection = computed<string>(() => {
  switch (props.direction) {
    case "top": {
      return "translateY(-100%)";
    }
    case "left": {
      return "translateX(100%)";
    }
    case "bottom": {
      return "translateY(100%)";
    }
    case "right": {
      return "translateX(-100%)";
    }
    default: {
      return "";
    }
  }
});
</script>

<template>
  <Transition name="slide-in">
    <slot />
  </Transition>
</template>

<style scoped lang="scss">
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.1s ease-in;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: v-bind(selectedDirection);
}
</style>
