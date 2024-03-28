<script setup lang="ts">
import { computed } from "vue";

// consts
import { DEV_EMAIL } from "@/consts";

// computed
const mailSrc = computed<string>(() => `mailto:${DEV_EMAIL}`);
</script>

<template>
  <div class="login-description">
    <div class="login-description__wrapper">
      <div class="login-description__title">
        {{ $t("auth.login.title") }}
      </div>
      <div class="login-description__text">
        {{ $t("auth.login.description.beforeEmail") }}
        <a :href="mailSrc">{{ DEV_EMAIL }}</a>
        {{ $t("auth.login.description.afterEmail") }}
      </div>

      <div class="login-description__to-reg">
        {{ $t("auth.login.toReg") }}
        <router-link :to="{ name: 'RegistrationPage' }">
          {{ $t("auth.signUp") }}.
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-description {
  width: 100%;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--global-gap));
    justify-content: stretch;
  }

  &__title {
    font-size: 2rem;
    text-align: center;
  }

  &__text {
    text-align: center;
  }

  &__to-reg {
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
