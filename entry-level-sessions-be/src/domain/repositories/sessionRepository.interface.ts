import { SessionModel } from '../model/session';
import { Status } from '../model/status';

export interface ISessionRepository {
  insert(session: SessionModel): Promise<SessionModel>;
  findAll({
    short_title,
    status,
  }: {
    short_title?: string;
    status?: Status;
  }): Promise<SessionModel[]>;
  findById(id: string): Promise<SessionModel>;
  updateContent(id: string, isDone: boolean): Promise<void>;
  deleteById(id: string): Promise<void>;
}
