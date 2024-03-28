<script setup lang="ts">
import { onBeforeUnmount } from "vue";

// components
import LoginForm from "../components/LoginForm.vue";
import LoginDescription from "../components/LoginDescription.vue";
import AuthWrapper from "../components/AuthWrapper.vue";

// store
import { useAuthStore } from "../store";
const authStore = useAuthStore();

// hooks
onBeforeUnmount(() => {
  authStore.reset();
});
</script>

<template>
  <AuthWrapper>
    <template v-slot:description>
      <LoginDescription />
    </template>
    <template v-slot:form>
      <LoginForm />
    </template>
  </AuthWrapper>
</template>
