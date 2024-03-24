import type { AxiosInstance, AxiosPromise } from "axios";
import type { DataType, ParamsType } from "@/types";
import axios from "axios";

export class Http {
  #axios: AxiosInstance;
  baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || "";
    this.#axios = axios.create({
      timeout: 10000,
    });
  }

  getFullUrl(url: string): string {
    return new URL(url, this.baseUrl).href;
  }

  get(url: string, params?: ParamsType): AxiosPromise {
    return this.#axios.get(this.getFullUrl(url), params);
  }

  post(url: string, data?: DataType, params?: ParamsType): AxiosPromise {
    return this.#axios.post(this.getFullUrl(url), data, params);
  }
}

export const http = new Http();
