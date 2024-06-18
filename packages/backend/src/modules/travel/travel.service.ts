import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TravelDto } from 'src/dto/travel.dto';
import { OpenaiService } from '../openai/openai.service';
import { PlanOfDayService } from '../plan-of-day/planOfDay.service';
import { PlanOfDayDto } from 'src/dto/planOfDay.dto';
import { TravelImageService } from '../travel-image/travel-image.service';

const prisma = new PrismaClient();

export interface ITavel {
  id: string;
  country: string;
  state: string;
  city: string;
  date: Date;
  duration: number;
  food: boolean;
  art: boolean;
  userId: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class TravelService {
  constructor(
    private readonly openAiService: OpenaiService,
    private readonly planOfDayService: PlanOfDayService,
    private readonly travelImageService: TravelImageService,
  ) {}

  async createTravel(dto: TravelDto): Promise<string> {
    const date = new Date(dto.date);
    if (isNaN(date.getTime())) {
      throw new Error(
        'Invalid date format. The date must be in ISO-8601 format.',
      );
    }
    const aiDescription =
      await this.openAiService.generateDescriptionOfTravel(dto);
    console.log('Generated description:');
    console.log(aiDescription.message.content);
    const travel = await prisma.travel.create({
      data: {
        userId: dto.userId,
        country: dto.country,
        state: dto.state,
        city: dto.city,
        date: date,
        duration: dto.duration,
        food: dto.food,
        art: dto.art,
        description: aiDescription.message.content,
      },
    });
    const generatedText = await this.openAiService.generatePlanOfDay(dto);
    const planOfAllDays = await generatedText.message.content
      .toString()
      .replaceAll(/- Day \d+:\n/g, '')
      .split('\n\n');

    for (let i = 0; i < planOfAllDays.length; i++) {
      const planData: PlanOfDayDto = {
        travelId: travel.id,
        text: planOfAllDays[i],
        number: i + 1,
      };
      await this.planOfDayService.createDay(planData);
    }
    return generatedText.message.content;
  }

  async updateTravel(id: string, dto: TravelDto) {
    const updateTravel = await prisma.travel.update({
      where: { id: id },
      data: {
        userId: dto.userId,
        country: dto.country,
        state: dto.state,
        city: dto.city,
        date: dto.date ? new Date(dto.date) : undefined,
        duration: dto.duration,
        food: dto.food,
        art: dto.art,
      },
    });
    await this.planOfDayService.deleteDay(id);
    const aiText = await this.openAiService.generatePlanOfDay(dto);
    const updatePlanOfAllDays = await aiText.message.content
      .toString()
      .replaceAll(/- Day \d+:\n/g, '')
      .split('\n\n');

    for (let i = 0; i < updatePlanOfAllDays.length; i++) {
      const planData: PlanOfDayDto = {
        travelId: updateTravel.id,
        text: updatePlanOfAllDays[i],
        number: i + 1,
      };
      await this.planOfDayService.createDay(planData);
    }
    return updateTravel;
  }

  async likeTravel(id: string) {
    try {
      const travel = await prisma.travel.findUnique({ where: { id: id } });
      await prisma.travel.update({
        where: { id: id },
        data: { favorite: !travel.favorite },
      });
      travel;
    } catch (error) {
      return { message: error.message };
    }
  }

  async getLikedTravels(userId: string) {
    try {
      const likedTravels = await prisma.travel.findMany({
        where: { userId: userId, favorite: true },
      });
      return likedTravels;
    } catch (error) {
      return { message: error.message };
    }
  }

  async getTravelData(id: string): Promise<{ travel: ITavel; image: string }> {
    const travel = await prisma.travel.findUnique({ where: { id: id } });
    console.log(travel);
    const generateImage = await this.travelImageService.getImage(
      travel.country,
    );
    const image = generateImage.original;
    return { travel, image };
  }

  async getAllTravels(userId: string) {
    const allTravels = await prisma.travel.findMany({
      where: { userId: userId },
      orderBy: {
        createdAt: 'desc',
      },
    });
    console.log(allTravels);
    return allTravels;
  }
}
