import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';
import { TravelModule } from './modules/travel/travel.module';
import { AuthModule } from './modules/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from './modules/user/user.module';
import { OpenaiModule } from './modules/openai/openai.module';
import { PlanOfDayModule } from './modules/plan-of-day/planOfDay.module';
import { TravelImageModule } from './modules/travel-image/travel-image.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          loggingMiddleware({
            logger: new Logger('PrismaMiddlewear'),
            logLevel: 'log',
          }),
        ],
      },
    }),
    TravelModule,
    AuthModule,
    PassportModule.register({ session: true }),
    UserModule,
    OpenaiModule,
    PlanOfDayModule,
    TravelImageModule,
  ],
})
export class AppModule {}
