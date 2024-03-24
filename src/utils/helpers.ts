import type { AxiosError } from "axios";

export const getAxiosErrorText = (e: AxiosError): string => {
  return e.response?.statusText ?? "Please try later";
};
