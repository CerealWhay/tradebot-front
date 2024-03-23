<script setup lang="ts">
import { onMounted } from "vue";

// store
import { useAccountStore } from "@/modules/account/store";
const accountStore = useAccountStore();

// methods
async function getWalletBalance() {
  await accountStore.getWalletBalance();
}

// hooks
onMounted(() => {
  getWalletBalance();
});
</script>

<template>
  <div>account page</div>
  <div>{{ accountStore.walletBalance }}</div>
</template>

<style scoped lang="scss"></style>
