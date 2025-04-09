import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from '../../../infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../base-use-case';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class GetUserByEmailService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  execute(email: string): Promise<IUser> {
    return this.usersRepository.findByEmail(email);
  }
}
