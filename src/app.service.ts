import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { ContextService } from './context/context.service';

@Injectable()
export class AppService {
  constructor(
    private readonly log: LoggerService,
    private readonly context: ContextService,
  ) {
    console.log(`AppService/constructor: prefix ${this.log.prefix} logger ${this.log.logger}`);
    this.log.setPrefix('AppService');
  }

  getHello(): string {
    console.log(`AppService/getHello: prefix ${this.log.prefix} logger ${this.log.logger}`);
    this.log.info('getHello');
    this.log.info(this.context.getContext());
    return 'Hello World!';
  }
}
