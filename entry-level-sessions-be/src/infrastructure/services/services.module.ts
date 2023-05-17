import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { EntryLevelService } from './entryLevel.service';

@Module({
  imports: [
    ConfigModule,
    EnvironmentConfigModule,
    ExceptionsModule,
    LoggerModule,
    HttpModule,
  ],
  providers: [EntryLevelService],
  exports: [EntryLevelService],
})
export class ServicesModule {}
