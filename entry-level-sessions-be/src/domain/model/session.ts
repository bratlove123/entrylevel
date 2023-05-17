import { Status } from './status';

export class SessionModel {
  id: string;
  name: string;
  status: Status;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  program: ProgramModel[];
}

export class ProgramModel {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: string;
}
