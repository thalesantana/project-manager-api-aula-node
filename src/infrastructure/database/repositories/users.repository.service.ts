import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IUser } from 'src/domain/interfaces/user.interface';
import { IUsersRepository } from 'src/domain/repositories/users-repository.interface';
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