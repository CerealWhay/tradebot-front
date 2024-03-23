import { http } from "@/network";
import endpoints from "@/modules/account/api/endpoints.ts";

export class AccountApi {
  async getWalletBalance() {
    return await http.get(endpoints.walletBalance);
  }

  async getTransactionLog() {
    return await http.get(endpoints.transactionLog);
  }
}
