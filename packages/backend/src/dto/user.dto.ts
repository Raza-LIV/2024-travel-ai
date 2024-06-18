import { IsEmail, IsString, MinLength } from 'class-validator';

interface Travel {
  country: string;
  state: string;
  city: string;
  date: string;
  duration: number;
  food: boolean;
  art: boolean;
}

export class UserDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @MinLength(6, { message: 'Password must contain 6 or mor symbols' })
  readonly password: string;

  readonly travels: Travel[];
}
