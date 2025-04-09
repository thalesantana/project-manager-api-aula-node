import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { IUsersRepository } from '@project-manager-api/domain/repositories/users-repository.interface';
import { UserEntity } from '../entities/user.entity';
@Injectable()
export class UsersRepositoryService
 extends Repository<UserEntity>
 implements IUsersRepository
{
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    findByEmail(email: string): Promise<IUser> {
        return this.findOneByOrFail({ email }) as Promise<IUser>;
    }

    findById(id: number): Promise<IUser> {
        return this.findOneByOrFail({ id }) as Promise<IUser>;
    }
    
    add(payload: DeepPartial<IUser>): Promise<IUser> {
       return this.save(payload) as Promise<IUser>;
    }
}