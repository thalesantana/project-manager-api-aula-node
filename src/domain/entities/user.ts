import { IProject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  projects: IProject[];
  tasks: ITask[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    projects: IProject[],
    tasks: ITask[],
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.projects = projects;
    this.tasks = tasks;
  }
}
