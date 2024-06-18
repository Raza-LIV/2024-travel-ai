import { Controller, Get, Param } from '@nestjs/common';
import { TravelImageService } from './travel-image.service';

@Controller('travel-image')
export class TravelImageController {
  constructor(private readonly travelImageService: TravelImageService) {}

  @Get(':place')
  async getTravelImage(@Param('place') place: string) {
    return await this.travelImageService.getImage(place);
  }
}
