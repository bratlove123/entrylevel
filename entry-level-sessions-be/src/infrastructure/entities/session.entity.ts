import { IsArray, IsBoolean, IsDate, IsString } from 'class-validator';
import { Status } from 'src/domain/model/status';

export class SessionEntity {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsBoolean()
  status: Status;

  @IsDate()
  start_date: Date;

  @IsDate()
  end_date: Date;

  @IsDate()
  created_at: Date;

  @IsArray()
  program: Program[];
}

export class Program {
  @IsString()
  id: string;

  @IsString()
  display_title: string;

  @IsString()
  thumbnail_img_url: string;

  @IsString()
  short_title: string;
}
