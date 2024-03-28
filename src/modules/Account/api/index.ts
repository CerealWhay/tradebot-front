import { Http } from "@/network";
import endpoints from "./endpoints";

export class AccountApi {
  http: Http;

  constructor() {
    this.http = new Http();
  }

  async getWalletBalance() {
    return await this.http.get(endpoints.walletBalance);
  }

  async getTransactionLog() {
    return await this.http.get(endpoints.transactionLog);
  }
}
