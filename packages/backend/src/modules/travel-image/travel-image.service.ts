import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

interface IResponse {
  data: { photos: Array<{ src: { original: string } }> };
}

@Injectable()
export class TravelImageService {
  async getImage(place: string) {
    try {
      const res: IResponse = await axios.get(
        `https://api.pexels.com/v1/search?query=${place}&per_page=1`,
        {
          headers: {
            Authorization:
              'u1OX2cxFyff8KryiSIogATHcZFraDHiQ36eiB1ngELE0AHZjqAfvr5Uo',
          },
        },
      );
      console.log(res.data.photos);
      return res.data.photos[0].src;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error ocurred while get image',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
