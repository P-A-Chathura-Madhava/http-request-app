import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('list/api')
  public async listApi() {
    return await this.appService.apiFindAll();
  }

  @Get('data')
  public async dataFromLocalApi() {
    return await this.appService.getAllDataApi();
  }
}
