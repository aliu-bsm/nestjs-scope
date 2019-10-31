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
    this.log.setPrefix('AppController');
  }

  @Get()
  getHello(): string {
    this.context.setContext({
      time: new Date().toISOString(),
    });

    this.log.info('getHello');
    return this.appService.getHello();
  }
}
