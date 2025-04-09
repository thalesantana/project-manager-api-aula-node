import { Module } from '@nestjs/common';
import { UsersRepositoryService } from './repositories/users.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { UserEntity } from './entities/user.entity';
import { ProjectEntity } from './entities/project.entity';
import { TaskEntity } from '@tasks/infrastructure/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: [UserEntity, ProjectEntity, TaskEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [
    ProjectsRepositoryService,
    UsersRepositoryService,
  ],
  exports: [
    ProjectsRepositoryService,
    UsersRepositoryService,
  ],
})
export class DatabaseModule {}