import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../../infrastructure/auth/auth.service';
import { LoginDto } from './dtos/login.dto';
import { Public } from '../../guards/auth-guard.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
