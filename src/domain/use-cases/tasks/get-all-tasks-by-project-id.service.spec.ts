import { Test, TestingModule } from '@nestjs/testing';
import { GetAllTasksService } from './get-all-tasks-by-project-id.service';

describe('GetAllTasksByProjectIdService', () => {
  let service: GetAllTasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllTasksService],
    }).compile();

    service = module.get<GetAllTasksService>(GetAllTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
