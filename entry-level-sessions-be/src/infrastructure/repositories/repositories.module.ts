import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { ServicesModule } from '../services/services.module';
import { DatabaseSessionRepository } from './session.repository';

@Module({
  imports: [
    HttpModule,
    LoggerModule,
    ExceptionsModule,
    EnvironmentConfigModule,
    ServicesModule,
  ],
  providers: [DatabaseSessionRepository],
  exports: [DatabaseSessionRepository],
})
export class RepositoriesModule {}
