import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { SessionController } from './sessions/session.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [SessionController],
})
export class ControllersModule {}
