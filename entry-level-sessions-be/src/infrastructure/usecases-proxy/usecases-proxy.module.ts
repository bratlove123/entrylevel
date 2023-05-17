import { DynamicModule, Module } from '@nestjs/common';
import { listSessionsUseCase } from '../../usecases/sessions/queries/list.usecase';

import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';

import { RepositoriesModule } from '../repositories/repositories.module';

import { DatabaseSessionRepository } from '../repositories/session.repository';

import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {
  static LIST_SESSIONS_USECASES_PROXY = 'listSessionsUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [LoggerService, DatabaseSessionRepository],
          provide: UsecasesProxyModule.LIST_SESSIONS_USECASES_PROXY,
          useFactory: (
            logger: LoggerService,
            sessionRepository: DatabaseSessionRepository,
          ) =>
            new UseCaseProxy(
              new listSessionsUseCase(logger, sessionRepository),
            ),
        },
      ],
      exports: [UsecasesProxyModule.LIST_SESSIONS_USECASES_PROXY],
    };
  }
}
