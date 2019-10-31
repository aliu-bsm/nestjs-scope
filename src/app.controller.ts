import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { ContextService } from './context/context.service';

@Controller()
export class AppController {
  constructor(
    private readonly log: LoggerService,
    private readonly context: ContextService,
    private readonly appService: AppService,
  ) {
    console.log(`AppController/constructor: prefix ${this.log.prefix} logger ${this.log.logger}`);
    this.log.setPrefix('AppController');
  }

  @Get()
  getHello(): string {
    console.log(`AppController/getHello: prefix ${this.log.prefix} logger ${this.log.logger}`);
    this.context.setContext({
      time: new Date().toISOString(),
    });

    this.log.info('getHello');
    return this.appService.getHello();
  }
}
