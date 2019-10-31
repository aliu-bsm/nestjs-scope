import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class LoggerService {
  prefix;
  logger;

  constructor() {
    console.log('logger service constructor');
    this.logger = console;
  }

  setPrefix(prefix: string) {
    this.prefix = prefix;
  }

  info(...args) {
    this.logger.log(`[${this.prefix}]`, ...args);
  }
}
