import { Status } from 'src/domain/model/status';
import { ILogger } from '../../../domain/logger/logger.interface';
import { SessionModel } from '../../../domain/model/session';
import { ISessionRepository } from '../../../domain/repositories/sessionRepository.interface';

export class listSessionsUseCase {
  constructor(
    private readonly logger: ILogger,
    private readonly sessionRepository: ISessionRepository,
  ) {}

  async execute({
    short_title,
    status,
  }: {
    short_title?: string;
    status?: Status;
  }): Promise<SessionModel[]> {
    const result = await this.sessionRepository.findAll({
      short_title,
      status,
    });
    this.logger.log('listSession execute', 'Success');
    return result;
  }
}
