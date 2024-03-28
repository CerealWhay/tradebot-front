<script setup lang="ts">
import { onBeforeUnmount } from "vue";

// components
import RegistrationForm from "../components/RegistrationForm.vue";
import RegistrationDescription from "../components/RegistrationDescription.vue";
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
      <RegistrationDescription />
    </template>
    <template v-slot:form>
      <RegistrationForm />
    </template>
  </AuthWrapper>
</template>
