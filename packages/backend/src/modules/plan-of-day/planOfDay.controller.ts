import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlanOfDayService } from './planOfDay.service';
import { PlanOfDayDto } from 'src/dto/planOfDay.dto';

@Controller('/plan')
export class PlanOfDayController {
  constructor(private readonly planOfDayService: PlanOfDayService) {}

  @Post()
  async creatPlanOfDay(@Body() planOfDayDto: PlanOfDayDto) {
    return this.planOfDayService.createDay(planOfDayDto);
  }

  @Patch(':id')
  async updatePlanOfDay(@Param('id') id: string, @Body() change: string) {
    return this.planOfDayService.updateDay(id, change);
  }

  @Get(':travelId')
  async getPlanById(@Param('travelId') travelId: string) {
    return this.planOfDayService.getDaysById(travelId);
  }

  @Delete(':travelId')
  async deletePlanOfDay(@Param('travelId') travelId: string) {
    return this.planOfDayService.deleteDay(travelId);
  }
}
