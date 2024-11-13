import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':username')
  getHello(@Param() params) {
    return this.appService.getUser(params);
  }
}
