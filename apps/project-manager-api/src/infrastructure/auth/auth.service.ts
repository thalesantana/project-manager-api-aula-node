import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetUserByEmailService } from '../../domain/use-cases/users/get-user-by-email.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly getUserByEmailUseCase: GetUserByEmailService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    try {
      const user = await this.getUserByEmailUseCase.execute(email);
      const isValidUser = await compare(password, user.password);

      if (!isValidUser) {
        throw new UnauthorizedException();
      }

      const payload = { sub: user.id, username: user.email };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

}
