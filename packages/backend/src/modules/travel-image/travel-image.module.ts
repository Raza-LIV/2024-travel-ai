import { Module } from '@nestjs/common';
import { TravelImageController } from './travel-image.controller';
import { TravelImageService } from './travel-image.service';

@Module({
  providers: [TravelImageService],
  controllers: [TravelImageController],
})
export class TravelImageModule {}
