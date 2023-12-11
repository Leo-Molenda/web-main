import { AdditionalTask } from './AdditionalTask';
import { Project } from './Project';
import { Task } from './Task';

export interface User {
  id: string;
  createdAt: Date;
  email: string;
  name: string;
  isAdmin: boolean;

  projects: Project[];
  projectsOwner: Project[];
  tasks: Task[];
  additionalTasks: AdditionalTask[];
}
