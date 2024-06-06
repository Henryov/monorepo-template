import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto'
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  signIn(@Body() signInDto: LoginDto) {

    return this.authService.signIn(signInDto.username, signInDto.password)
  }
}
