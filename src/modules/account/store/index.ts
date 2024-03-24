import { defineStore } from "pinia";
import { AccountApi } from "@/modules/account/api";
import { ref } from "vue";
import { useToastStore } from "@/store/toast";

export const useAccountStore = defineStore("account", () => {
  const api = new AccountApi();
  const toastStore = useToastStore();

  const walletBalance = ref({});

  async function getWalletBalance(): Promise<void> {
    try {
      walletBalance.value = await api.getWalletBalance();
    } catch (e) {
      toastStore.showError(e);
    }
  }

  return {
    walletBalance,
    getWalletBalance,
  };
});
