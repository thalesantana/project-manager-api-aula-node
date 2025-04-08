import { IProject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';

export class Project implements IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;

  constructor(
    id: number,
    name: string,
    description: string,
    tasks: ITask[],
    user: IUser,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tasks = tasks;
    this.user = user;
  }
}
