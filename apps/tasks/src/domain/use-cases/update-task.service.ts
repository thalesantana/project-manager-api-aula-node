import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@app/common/interfaces/base-use-case';
import { ITask } from '../interfaces/task.interface';
import { TasksRepositoryService } from '@tasks/infrastructure/database/tasks.repository.service';
import { UpdateTaskDto } from '@tasks/gateways/controllers/dtos/update-task.dto';

@Injectable()
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
  ) {}

  async execute(payload: {
    task: UpdateTaskDto;
    userId: number;
  }): Promise<ITask> {
    await this.tasksRepository.updateById(payload.task);
    const task = this.tasksRepository.findById(payload.task.id, payload.userId);
    if (!task) {
      throw new Error('Tarefa não encontrado');
    }

    return task;
  }
}
