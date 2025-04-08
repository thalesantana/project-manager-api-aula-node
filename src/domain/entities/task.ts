import { IProject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';

export class Task implements ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;

  constructor(
    id: number,
    name: string,
    status: 'pending' | 'completed',
    project: IProject,
    user: IUser,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.project = project;
    this.user = user;
  }
}
