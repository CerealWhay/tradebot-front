<script setup lang="ts">
// components
import FloatLabel from "primevue/floatlabel";

// store
import { useAuthStore } from "../store";
const authStore = useAuthStore();
</script>

<template>
  <div class="registration-form">
    <div class="registration-form__wrapper">
      <FloatLabel class="registration-form__field">
        <InputText v-model="authStore.registrationForm.username" />
        <label>
          {{ $t("auth.form.username") }}
        </label>
      </FloatLabel>

      <FloatLabel class="registration-form__field">
        <Password
          v-model="authStore.registrationForm.password"
          toggle-mask
        />
        <label>
          {{ $t("auth.form.password") }}
        </label>
      </FloatLabel>

      <FloatLabel class="registration-form__field">
        <Password
          v-model="authStore.registrationForm.passwordConfirm"
          toggle-mask
        />
        <label>
          {{ $t("auth.form.passwordConfirm") }}
        </label>
      </FloatLabel>

      <Button
        :label="$t('auth.signIn')"
        icon="pi pi-sign-in"
        type="button"
        :loading="authStore.loading"
        @click="authStore.register"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.registration-form {
  width: 100%;
  padding: 1rem 0;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: calc(1.5 * var(--global-gap));
  }

  &__field {
    width: 100%;
  }
}
</style>
