import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class LoggerService {
  private prefix;
  private logger;

  constructor() {
    this.logger = console;
  }

  setPrefix(prefix: string) {
    this.prefix = prefix;
  }

  info(...args) {
    this.logger.log(`[${this.prefix}]`, ...args);
  }
}
