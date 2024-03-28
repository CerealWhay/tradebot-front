import { Http } from "@/network";
import endpoints from "./endpoints";
import { LoginDto } from "./dto/login";
import { RegistrationDto } from "./dto/registration";
import { TokenResponse } from "./response/token";

export class AuthApi {
  http: Http;

  constructor() {
    this.http = new Http();
  }

  async login(data: LoginDto): Promise<TokenResponse> {
    return (await this.http.post(endpoints.login, data)).data;
  }

  async register(data: RegistrationDto): Promise<TokenResponse> {
    return (await this.http.post(endpoints.register, data)).data;
  }
}
