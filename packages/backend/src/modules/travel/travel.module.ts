import { Module } from '@nestjs/common';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service';
import { OpenaiService } from '../openai/openai.service';
import { PlanOfDayService } from '../plan-of-day/planOfDay.service';
import { TravelImageService } from '../travel-image/travel-image.service';

@Module({
  controllers: [TravelController],
  providers: [
    TravelService,
    OpenaiService,
    PlanOfDayService,
    TravelImageService,
  ],
})
export class TravelModule {}
