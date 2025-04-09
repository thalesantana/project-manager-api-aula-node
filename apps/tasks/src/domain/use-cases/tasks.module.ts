import { Module } from '@nestjs/common';
import { GetAllTasksService } from './get-all-tasks-by-project-id.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';
import { UpdateTaskService } from './update-task.service';
import { InfrastructureModule } from '@tasks/infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
  ],
  exports: [
    GetAllTasksService,
    GetTaskByIdService,
    CreateTaskService,
    UpdateTaskService,
  ],
})
export class TasksModule {}