import { Observable } from 'rxjs';

export interface IEntryLevelService<T> {
  getListSessions(): Observable<T[]>;
}
