import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDto } from 'src/dto/user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async createUser(dto: UserDto) {
    try {
      const user = await prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: dto.password,
        },
      });
      return user;
    } catch (error) {
      return { message: error.message };
    }
  }

  async getAllUsers() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      return { message: error.message };
    }
  }

  async logIn(dto: UserDto) {
    const { email, password } = dto;
    try {
      const user = await prisma.user.findUnique({
        where: { email: email, password: password },
      });
      if (user) {
        return user;
      }
      return { message: 'This user does not exists' };
    } catch (error) {
      return { message: error.message };
    }
  }

  async deleteUser(id: string) {
    try {
      // const travels =
      // const plsnOfDay = await prisma.planOfDay.deleteMany({where: {travelId: id}})
      const user = await prisma.user.delete({ where: { id: id } });
      return user;
    } catch (error) {
      return { message: error.message };
    }
  }

  // async getUser(email: string) {
  //   const user = prisma.user.findUnique({ where: { email: email } });
  //   console.log(user);
  //   return user;
  // }
}
