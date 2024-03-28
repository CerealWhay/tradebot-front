<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

// store
import { useAccountStore } from "../store";
const accountStore = useAccountStore();

// methods
async function getWalletBalance() {
  await accountStore.getWalletBalance();
}

// hooks
onMounted(() => {
  getWalletBalance();
});

onBeforeUnmount(() => {
  accountStore.reset();
});
</script>

<template>
  <div>account page</div>
  <div>{{ accountStore.walletBalance }}</div>
</template>

<style scoped lang="scss"></style>
