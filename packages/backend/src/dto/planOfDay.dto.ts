import { IsInt, IsString } from 'class-validator';

export class PlanOfDayDto {
  @IsString()
  readonly travelId: string;

  @IsString()
  readonly text: string;

  @IsInt()
  readonly number: number;
}
