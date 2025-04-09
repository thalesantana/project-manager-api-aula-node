import { BaseUseCase } from '@app/common/interfaces/base-use-case';
import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/task.interface';
import { TasksRepositoryService } from '@tasks/infrastructure/database/tasks.repository.service';

@Injectable()
export class GetAllTasksService implements BaseUseCase {

    constructor(
        private readonly tasksRepository: TasksRepositoryService,
    ) {}

    async execute(payload: { userId: number }): Promise<ITask[]> {
        const tasks = await this.tasksRepository.findAll(payload.userId);
        if (!tasks) {
            throw new Error('Erro ao listar tarefas');
        }

        return tasks;
    }

}