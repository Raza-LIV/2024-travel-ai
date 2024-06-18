import { Module } from '@nestjs/common';
import { PlanOfDayService } from './planOfDay.service';
import { PlanOfDayController } from './planOfDay.controller';
import { OpenaiService } from '../openai/openai.service';

@Module({
  controllers: [PlanOfDayController],
  providers: [PlanOfDayService, OpenaiService],
})
export class PlanOfDayModule {}
