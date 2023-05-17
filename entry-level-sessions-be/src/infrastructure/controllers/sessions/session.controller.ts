import { Controller, Get, Inject, Query } from '@nestjs/common';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { listSessionsUseCase } from '../../../usecases/sessions/queries/list.usecase';
import { Status } from 'src/domain/model/status';

@Controller('session')
export class SessionController {
  constructor(
    @Inject(UsecasesProxyModule.LIST_SESSIONS_USECASES_PROXY)
    private readonly listSessionsUsecaseProxy: UseCaseProxy<listSessionsUseCase>,
  ) {}

  @Get('sessions')
  async listSessions(
    @Query('short_title') short_title: string,
    @Query('status') status: Status,
  ) {
    return await this.listSessionsUsecaseProxy
      .getInstance()
      .execute({ short_title, status });
  }
}
