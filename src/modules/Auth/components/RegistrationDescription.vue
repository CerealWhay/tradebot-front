<script setup lang="ts">
import { computed } from "vue";

// consts
import { DEV_EMAIL } from "@/consts";

// computed
const mailSrc = computed<string>(() => `mailto:${DEV_EMAIL}`);
</script>

<template>
  <div class="registration-description">
    <div class="registration-description__wrapper">
      <div class="registration-description__title">
        {{ $t("auth.reg.title") }}
      </div>
      <div class="registration-description__text">
        {{ $t("auth.reg.warning") }}
      </div>

      <div class="registration-description__text">
        {{ $t("auth.reg.desc") }}
        <a :href="mailSrc">{{ DEV_EMAIL }}</a>
      </div>

      <div class="registration-description__to-login">
        {{ $t("auth.reg.toLogin") }}
        <router-link :to="{ name: 'LoginPage' }">
          {{ $t("auth.signIn") }}.
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.registration-description {
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

  &__to-login {
    font-size: 0.75rem;
    text-align: center;
  }
}
</style>
