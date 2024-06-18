import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelDto } from 'src/dto/travel.dto';
import { Travel } from '@prisma/client';

@Controller('travel')
export class TravelController {
  constructor(private travelService: TravelService) {}

  @Post()
  async createTravel(@Body() travelDto: TravelDto) {
    console.log('body travel', travelDto);
    return this.travelService.createTravel(travelDto);
  }

  @Patch(':id')
  async updateTravel(@Param('id') id: string, @Body() createTravel: TravelDto) {
    console.log(createTravel);
    try {
      const updatedTravel = await this.travelService.updateTravel(
        id,
        createTravel,
      );
      return updatedTravel;
    } catch (error) {
      console.log(error.message);
      throw new HttpException(
        'Failed to update travel',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch('/favorite/:id')
  async favoriteTravel(@Param('id') id: string) {
    return this.travelService.likeTravel(id);
  }

  @Get('/favorite/:id')
  async getFavoriteTravels(@Param(':id') id: string) {
    return this.travelService.getLikedTravels(id);
  }

  @Get('travel-data-by-id/:id')
  async getTravelData(@Param('id') id: string) {
    console.log(id);
    try {
      const travelData = await this.travelService.getTravelData(id);
      console.log(travelData);
      if (travelData) return travelData;
      return { message: "Traval with this id dosen't exist" };
    } catch (error) {
      throw new HttpException(
        'Faild to get travel data',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('travel-list-by-user-id/:userId')
  async getallTravels(@Param('userId') userId: string) {
    console.log(userId);
    try {
      const travelList = await this.travelService.getAllTravels(userId);
      console.log(travelList);
      if (travelList) return travelList;
      return { message: 'User with this id dose not exsist' };
    } catch (error) {
      throw new HttpException(
        'Faild to get all travels',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
