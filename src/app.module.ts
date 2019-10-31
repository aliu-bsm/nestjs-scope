import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { ContextService } from './context/context.service';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    LoggerService,
    ContextService,
  ],
})
export class AppModule {}
