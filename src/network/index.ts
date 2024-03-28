import type { AxiosInstance, AxiosPromise } from "axios";
import type { DataType, ParamsType } from "@/types";
import axios from "axios";
import { BASE_API_URL } from "@/consts";
import { useAuthStore } from "@/modules/Auth";

export class Http {
  #axios: AxiosInstance;
  baseUrl: string;
  token: string | null;

  constructor() {
    this.baseUrl = BASE_API_URL;
    this.token = localStorage.getItem("token");
    this.#axios = axios.create({
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    this.#axios.interceptors.response.use(null, async (error) => {
      // logout if unauthorized
      if (error.response.status === 401) {
        await useAuthStore().logout();
      }
      return Promise.reject(error);
    });
  }

  private getFullUrl(url: string): string {
    return new URL(url, this.baseUrl).href;
  }

  get(url: string, params?: ParamsType): AxiosPromise {
    return this.#axios.get(this.getFullUrl(url), params);
  }

  post(url: string, data?: DataType, params?: ParamsType): AxiosPromise {
    return this.#axios.post(this.getFullUrl(url), data, params);
  }
}
