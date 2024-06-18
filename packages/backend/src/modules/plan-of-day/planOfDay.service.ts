import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PlanOfDayDto } from 'src/dto/planOfDay.dto';
import { OpenaiService } from '../openai/openai.service';

const prisma = new PrismaClient();

@Injectable()
export class PlanOfDayService {
  constructor(private readonly openaiService: OpenaiService) {}
  async createDay(planOfDayDto: PlanOfDayDto) {
    try {
      const planOfDay = await prisma.planOfDay.create({
        data: {
          travelId: planOfDayDto.travelId,
          text: planOfDayDto.text,
          number: planOfDayDto.number,
        },
      });
      console.log(planOfDay);
      return planOfDay;
    } catch (error) {
      console.log('ERROR');
      throw new HttpException(
        'Error ocurred while set plan of day',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateDay(id: string, change: string) {
    try {
      const planOfDayData = await prisma.planOfDay.findUnique({
        where: { id: id },
      });
      const generatedText = await this.openaiService.updatePlanOfDay(
        planOfDayData.text,
        change,
      );
      const updatePlanOfDay = await generatedText.message.content
        .toString()
        .replaceAll(/- Day \d+:\n/g, '');
      const planOfDay = await prisma.planOfDay.update({
        where: { id: id },
        data: {
          text: generatedText.message.content,
        },
      });
      console.log(planOfDay);
      return generatedText.message;
    } catch (error) {
      console.log('ERROR');
      throw new HttpException(
        'Error ocurred while set plan of day',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getDaysById(travelId: string) {
    try {
      console.log(travelId);
      const planArr = await prisma.planOfDay.findMany({
        where: { travelId: travelId },
      });
      console.log(planArr);
      if (planArr) return planArr;
      return { message: 'Plan of day with this travelId is not exsists' };
    } catch (error) {
      throw new HttpException(
        'Error ocorred while find plan of day',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteDay(travelId: string) {
    try {
      await prisma.planOfDay.deleteMany({
        where: { travelId: travelId },
      });

      return { message: 'plans were deleted' };
    } catch (error) {
      return { message: error.message };
    }
  }
}
