import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';
import { Request } from 'express';

@Controller('api/auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Handle Authentification' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }

  @Get('status')
  userAccount(@Req() request: Request) {
    if (request.user) {
      console.log(request.user);
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Autenticated' };
    }
  }
}
