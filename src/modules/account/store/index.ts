import { defineStore } from "pinia";
import { AccountApi } from "@/modules/account/api";
import { ref } from "vue";

export const useAccountStore = defineStore("account", () => {
  const api = new AccountApi();

  const walletBalance = ref({});

  async function getWalletBalance(): Promise<void> {
    walletBalance.value = await api.getWalletBalance();
  }

  return {
    walletBalance,
    getWalletBalance,
  };
});
