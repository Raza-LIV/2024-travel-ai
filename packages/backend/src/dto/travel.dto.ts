import { IsBoolean, IsDateString, IsInt, IsString, Min } from 'class-validator';

export class TravelDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly country: string;

  @IsString()
  readonly state: string;

  @IsString()
  readonly city: string;

  @IsDateString()
  readonly date: string; // Використовуємо IsDateString для перевірки, що рядок є валідною датою ISO-8601

  @IsInt()
  @Min(1)
  readonly duration: number;

  @IsBoolean()
  readonly food: boolean;

  @IsBoolean()
  readonly art: boolean;
}
