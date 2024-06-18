export interface IUserDto {
  id?: string;
  name: string;
  email: string;
  password: string;
}
export interface ITravelDto {
  userId: string;
  country: string;
  state: string;
  city: string;
  date: string;
  duration: number | undefined;
  food: boolean | null;
  art: boolean | null;
}
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
