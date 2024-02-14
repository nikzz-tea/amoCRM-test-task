import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TokenService } from './token.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly tokenService: TokenService,
  ) {}

  @Post('/leads')
  createLead(@Body() dto: {}) {
    return `"Created" entity ${JSON.stringify(dto)}`;
  }

  @Post('/contacts')
  createContact(@Body() dto: {}) {
    return `"Created" entity ${JSON.stringify(dto)}`;
  }

  @Post('/companies')
  createCompany(@Body() dto: {}) {
    return `"Created" entity ${JSON.stringify(dto)}`;
  }
}
