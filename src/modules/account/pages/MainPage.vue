<script setup lang="ts">
import { onMounted } from "vue";

// Store
import { useAccountStore } from "@/modules/account/store";
const accountStore = useAccountStore();

// Methods
async function getWalletBalance() {
  await accountStore.getWalletBalance();
}

onMounted(() => {
  getWalletBalance();
});
</script>

<template>
  <div>account page</div>
  <div>{{ accountStore.walletBalance }}</div>
</template>

<style scoped lang="scss"></style>
