import { Injectable } from '@nestjs/common';
import { IUser } from '../../interfaces/user.interface';
import { BaseUseCase } from '@app/common/interfaces/base-use-case';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';

@Injectable()
export class GetUserByEmailService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  execute(email: string): Promise<IUser> {
    return this.usersRepository.findByEmail(email);
  }
}
