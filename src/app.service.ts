import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { ContextService } from './context/context.service';

@Injectable()
export class AppService {
  constructor(
    private readonly log: LoggerService,
    private readonly context: ContextService,
  ) {
    this.log.setPrefix('AppService');
  }

  getHello(): string {
    this.log.info('getHello');
    this.log.info(this.context.getContext());
    return 'Hello World!';
  }
}
