import type { AxiosError } from "axios";

export const getAxiosErrorText = (e: AxiosError): string => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    e.response?.data?.message ?? e.response?.statusText ?? "Please try later"
  );
};
