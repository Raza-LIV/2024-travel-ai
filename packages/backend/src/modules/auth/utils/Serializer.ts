import { PassportSerializer } from '@nestjs/passport';
import { PrismaService } from 'nestjs-prisma';
import { IUserAccount } from 'src/types/type';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(userAccount: IUserAccount, done: Function) {
    console.log('Serialize userAccount');
    done(null, userAccount);
  }

  async deserializeUser(payload: any, done: Function) {
    const userAccount = await this.authService.findUserAccount(payload.id);
    console.log('Deserialize userAccount');
    return userAccount ? done(null, userAccount) : done(null, null);
  }
}
