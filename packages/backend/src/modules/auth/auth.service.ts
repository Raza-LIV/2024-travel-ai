import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { IUserAccount } from 'src/types/type';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async validateUser(details: IUserAccount) {
    console.log('AuthService');
    console.log(details);
    const userAccount = await this.prismaService.userAccount.findUnique({
      where: { email: details.email },
    });
    console.log(userAccount);
    if (userAccount) return userAccount;
    console.log('User not found');
    const newUserAccount = await this.prismaService.userAccount.create({
      data: { email: details.email, displaqName: details.displayName },
    });
    return newUserAccount;
  }

  async findUserAccount(id: string) {
    const userAccount = await this.prismaService.userAccount.findUnique({
      where: { id },
    });
    return userAccount;
  }
}
