import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IEntryLevelService } from 'src/domain/services/entryLevelService.interface';
import { SessionEntity } from '../entities/session.entity';
import { map, catchError, Observable } from 'rxjs';
import { LoggerService } from '../logger/logger.service';
import { ExceptionsService } from '../exceptions/exceptions.service';
import { EnvironmentConfigService } from '../config/environment-config/environment-config.service';

@Injectable()
export class EntryLevelService implements IEntryLevelService<SessionEntity> {
  constructor(
    private readonly http: HttpService,
    private readonly logger: LoggerService,
    private readonly exceptionService: ExceptionsService,
    private readonly envService: EnvironmentConfigService,
  ) {}
  getListSessions(): Observable<SessionEntity[]> {
    const entryLevelAPI = this.envService.getEntryLevelAPI();
    return this.http
      .get(entryLevelAPI)
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          this.logger.error('Error', 'Entry level API error');
          throw this.exceptionService.badRequestException(e);
        }),
      );
  }
}
