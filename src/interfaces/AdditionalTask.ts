import { AdditionalTaskType } from './AdditionalTaskType';
import { Project } from './Project';
import { Task } from './Task';
import { User } from './User';

export interface AdditionalTask {
  id?: string;

  value?: string;
  fileId?: string;
  fileUrl?: string;

  project?: Project;
  projectId?: string;
  user?: User;
  userId?: string;
  task?: Task;
  taskId?: string;
  additionalTaskType?: AdditionalTaskType;
  additionalTaskTypeId?: string;
}
