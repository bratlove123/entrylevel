import { Injectable, NotImplementedException } from '@nestjs/common';
import { Status } from 'src/domain/model/status';
import { SessionModel, ProgramModel } from '../../domain/model/session';
import { ISessionRepository } from '../../domain/repositories/sessionRepository.interface';
import { SessionEntity, Program } from '../entities/session.entity';
import { EntryLevelService } from '../services/entryLevel.service';

@Injectable()
export class DatabaseSessionRepository implements ISessionRepository {
  constructor(private readonly entryService: EntryLevelService) {} //

  async updateContent(id: string, isDone: boolean): Promise<void> {
    throw new NotImplementedException();
  }

  async insert(todo: SessionModel): Promise<SessionModel> {
    throw new NotImplementedException();
  }
  async findAll({
    short_title,
    status,
  }: {
    short_title?: string;
    status?: Status;
  }): Promise<SessionModel[]> {
    let sessionsData = await this.entryService.getListSessions().toPromise();
    if (short_title) {
      sessionsData = sessionsData.filter(
        (s) =>
          s.program.filter((p) => p.short_title === short_title).length > 0,
      );
    }
    if (status) {
      sessionsData = sessionsData.filter((s) => s.status === status);
    }
    return sessionsData.map((s) => this.toSessionModel(s));
  }
  async findById(id: string): Promise<SessionModel> {
    throw new NotImplementedException();
  }
  async deleteById(id: string): Promise<void> {
    throw new NotImplementedException();
  }

  private toSessionModel(sessionEntity: SessionEntity): SessionModel {
    const session: SessionModel = new SessionModel();

    session.id = sessionEntity.id;
    session.name = sessionEntity.name;
    session.status = sessionEntity.status;
    session.start_date = sessionEntity.start_date;
    session.end_date = sessionEntity.end_date;
    session.created_at = sessionEntity.created_at;
    session.program = sessionEntity.program.map((p) => {
      const map = new ProgramModel();
      map.id = p.id;
      map.display_title = p.display_title;
      map.short_title = p.short_title;
      map.thumbnail_img_url = p.thumbnail_img_url;
      return map;
    });

    return session;
  }

  private toSessionEntity(session: SessionModel): SessionEntity {
    const sessionEntity: SessionEntity = new SessionEntity();

    sessionEntity.id = session.id;

    sessionEntity.name = session.name;
    sessionEntity.status = session.status;
    sessionEntity.start_date = session.start_date;
    sessionEntity.end_date = session.end_date;
    sessionEntity.created_at = session.created_at;
    sessionEntity.program = session.program.map((p) => {
      const map = new Program();
      map.id = p.id;
      map.display_title = p.display_title;
      map.short_title = p.short_title;
      map.thumbnail_img_url = p.thumbnail_img_url;
      return map;
    });

    return sessionEntity;
  }
}
