import { defineStore } from "pinia";
import { ref } from "vue";
import { AccountApi } from "@/modules/account/api";

export const useAccountStore = defineStore("account", () => {
  const api = new AccountApi();

  const walletBalance = ref();

  async function getWalletBalance() {
    walletBalance.value = await api.getWalletBalance();
  }

  return {
    walletBalance,
    getWalletBalance,
  };
});
