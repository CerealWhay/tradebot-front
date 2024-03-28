<script setup lang="ts">
// components
import FloatLabel from "primevue/floatlabel";

// store
import { useAuthStore } from "../store";
const authStore = useAuthStore();
</script>

<template>
  <div class="login-form">
    <div class="login-form__wrapper">
      <FloatLabel class="login-form__field">
        <InputText v-model="authStore.loginForm.username" />
        <label>
          {{ $t("auth.form.username") }}
        </label>
      </FloatLabel>

      <FloatLabel class="login-form__field">
        <Password
          v-model="authStore.loginForm.password"
          :feedback="false"
        />
        <label>
          {{ $t("auth.form.password") }}
        </label>
      </FloatLabel>

      <Button
        :label="$t('auth.signIn')"
        icon="pi pi-sign-in"
        type="button"
        :loading="authStore.loading"
        @click="authStore.login"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  width: 100%;
  padding: 1rem 0;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: calc(1.5 * var(--global-gap));
    align-items: end;
  }

  &__field {
    width: 100%;
  }

  input {
    width: 100%;
  }
}
</style>
