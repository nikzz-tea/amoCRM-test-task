import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TokenService {
  private credentials: { access_token: string; base_domain: string };

  constructor(private readonly configService: ConfigService) {}
  private oauthURL = this.configService.get('OUATH2_URL');
  private clientId = this.configService.get('CLIENT_ID');

  async getCredentials() {
    if (this.credentials) return this.credentials;
    await this.refreshCredentials();
    return this.credentials;
  }

  private async refreshCredentials() {
    try {
      const { data } = await axios.get(this.oauthURL, {
        headers: {
          'Content-Type': 'application/json',
          'X-Client-Id': this.clientId,
        },
      });
      this.credentials = data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
