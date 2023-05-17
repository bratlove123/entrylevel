import http from './api.service';
import { Session } from '../models/session.model';
import { Status } from '../models/status.model';

class SessionsDataService {
  getAll({ shortTitle, status }: { shortTitle?: string; status?: Status }) {
    const strParams: string[] = [];
    if (shortTitle) {
      strParams.push(`shortTitle=${shortTitle}`);
    }
    if (status) {
      strParams.push(`status=${status.toUpperCase()}`);
    }
    const joinedParam = strParams.length > 0 ? `?${strParams.join('&')}` : '';

    return http.get<Array<Session>>(`/session/sessions${joinedParam}`);
  }
}

export default new SessionsDataService();
