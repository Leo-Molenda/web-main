import { Project } from './Project';
import { User } from './User';
import { AdditionalTask } from './AdditionalTask';

export interface Task {
  id?: string;

  startTime: Date;
  endTime: Date;

  additionalTasks?: AdditionalTask[];

  project?: Project;
  projectId?: string;
  user?: User;
  userId?: string;
}
