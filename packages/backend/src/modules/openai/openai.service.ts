import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { TravelDto } from 'src/dto/travel.dto';

const openai = new OpenAI({
  organization: 'org-wK7we8Zg5sJpzNovMKCkumHG',
  project: process.env.PROJECT_ID,
});
@Injectable()
export class OpenaiService {
  async generatePlanOfDay(
    travelInfo: TravelDto,
  ): Promise<OpenAI.Chat.Completions.ChatCompletion.Choice> {
    try {
      const complection = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a travel planner. Please provide a detailed itinerary for a ${travelInfo.duration}-day trip to ${travelInfo.city}. I an ${travelInfo.food ? '' : 'not'} interesting at traditional food and i am ${travelInfo.art ? '' : 'not'} interesting at local attractions and history. The itinerary should include specific activities, for each day, formatted as bullet points. Only plan, don't add other text and titles it must be common style, don't bold and don't italic. Evry day starts with "- Day \d+:\n/g"`,
          },
          {
            role: 'user',
            content: `Please give me a travel plan for ${travelInfo.city}.`,
          },
        ],
        model: 'gpt-3.5-turbo',
        temperature: 0.1,
      });
      return complection.choices[0];
    } catch (error) {
      throw new HttpException(
        'Error ocurred while GPT text generating',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updatePlanOfDay(text: string, change: string) {
    try {
      const complection = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a text redactor. Regenerate text in same format.`,
          },
          {
            role: 'user',
            content: `Old text: "${text}". Regenerate text with new change "${change}".`,
          },
        ],
        model: 'gpt-3.5-turbo',
        temperature: 0.1,
      });
      return complection.choices[0];
    } catch (error) {
      console.log(error.message);
      return { message: error.message };
    }
  }

  async generateDescriptionOfTravel(travelInfo: TravelDto) {
    try {
      const complection = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a travel planner. Please provide short intro aboute trip to concrete place. Don't add other text like greatings or titles, just introduction. Not more than 30 words.`,
          },
          {
            role: 'user',
            content: `Generate introduction about ${travelInfo.duration}-days trip to country ${travelInfo.country}${travelInfo.state && ` ,city ${travelInfo.state}`}${travelInfo.city && ` ,city ${travelInfo.city}`}`,
          },
        ],
        model: 'gpt-3.5-turbo',
        temperature: 0.1,
      });
      return complection.choices[0];
    } catch (error) {
      throw new HttpException(
        'Error ocurred while GPT text gene',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
