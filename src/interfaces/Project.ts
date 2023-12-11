import { Task } from './Task';
import { AdditionalTaskType } from './AdditionalTaskType';
import { User } from './User';
import { AdditionalTask } from './AdditionalTask';

export interface Project {
  id: string;
  createdAt: Date;
  name: string;
  logoId: string;
  logoUrl: string;

  owner?: User;
  users?: User[];
  additionalTaskTypes?: AdditionalTaskType[];
  tasks?: Task[];
  additionalTask: AdditionalTask[];
}
