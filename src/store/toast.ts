import { defineStore } from "pinia";
import { useToast } from "primevue/usetoast";
import type { ToastType } from "@/types";
import { AxiosError } from "axios";
import { getAxiosErrorText } from "@/utils/helpers.ts";

export const useToastStore = defineStore("toast", () => {
  const toast = useToast();

  function showToast(
    type: ToastType,
    message: string = "",
    header: string = "Notify",
  ) {
    toast.add({
      severity: type,
      summary: header,
      detail: message,
      life: 3000,
    });
  }

  function showError(e: unknown) {
    if (e instanceof AxiosError) {
      showToast("error", getAxiosErrorText(e), e.message);
    } else {
      console.log(e);
    }
  }

  return { showToast, showError };
});
