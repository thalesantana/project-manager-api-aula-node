import {
    Controller,
    NotFoundException,
    UnprocessableEntityException
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskService } from '@tasks/domain/use-cases/create-task.service';
import { GetAllTasksService } from '@tasks/domain/use-cases/get-all-tasks-by-project-id.service';
import { GetTaskByIdService } from '@tasks/domain/use-cases/get-task-by-id.service';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly getAllTasksUseCase: GetAllTasksService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly createTaskUseCase: CreateTaskService,
  ) {}

  @MessagePattern({ cmd: 'get_tasks' })
  async findAll(@Payload() data: { userId: number }) {
    try {
      console.log("Recebendo mensagens em tasks - Thales Santana")
      return await this.getAllTasksUseCase.execute(data);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'get_task_by_id' })
  async findOne(@Payload() data: { userId: number, taskId: number }) {
    try {
      return await this.getTaskByIdUseCase.execute({
        taskId: data.taskId,
        userId: data.userId,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'create_task' })
  async create(@Payload() data: { userId: number, createTaskDto: CreateTaskDto }) {
    try {
      return await this.createTaskUseCase.execute({
        task: data.createTaskDto,
        userId: data.userId,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
