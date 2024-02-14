import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TokenService } from './token.service';

@Injectable()
export class AppService {
  constructor(private readonly tokenService: TokenService) {}

  async createEntity(entity: string, dto: {}) {
    const { access_token, base_domain } =
      await this.tokenService.getCredentials();
    try {
      const { data } = await axios.post(
        `https://${base_domain}/api/v4/${entity}`,
        dto,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      return data._embedded;
    } catch (error) {
      throw new Error(error);
    }
  }
}
