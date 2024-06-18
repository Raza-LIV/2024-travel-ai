import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { AuthService } from './auth.service';
import { SessionSerializer } from './utils/Serializer';

@Module({
  controllers: [AuthController],
  providers: [GoogleStrategy, AuthService, SessionSerializer],
})
export class AuthModule {}
