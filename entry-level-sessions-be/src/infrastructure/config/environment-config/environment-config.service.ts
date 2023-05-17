import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IAppConfig } from 'src/domain/config/appConfig.interface';

@Injectable()
export class EnvironmentConfigService implements IAppConfig {
  constructor(private configService: ConfigService) {}
  getEntryLevelAPI(): string {
    return this.configService.get<string>('ENTRY_LEVEL_API');
  }

  getAppPort(): string {
    return this.configService.get<string>('APP_PORT');
  }
}
