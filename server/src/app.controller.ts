import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/leads')
  createLead(@Body() dto: {}) {
    return this.appService.createEntity('leads', dto);
  }

  @Post('/contacts')
  createContact(@Body() dto: {}) {
    return this.appService.createEntity('contacts', dto);
  }

  @Post('/companies')
  createCompany(@Body() dto: {}) {
    return this.appService.createEntity('companies', dto);
  }
}
