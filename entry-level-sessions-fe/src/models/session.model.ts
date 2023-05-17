import { Status } from './status.model';

export interface Session {
  id: string;
  name: string;
  status: Status;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  program: Program[];
}

export interface Program {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: string;
}
