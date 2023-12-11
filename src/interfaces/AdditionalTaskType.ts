import { AdditionalTask } from './AdditionalTask';
import { Project } from './Project';

// type: 'number' | 'string' | 'boolean' | 'date' | 'file'
export interface AdditionalTaskType {
  id?: string;

  name?: string;
  type?: string;

  additionalTasks?: AdditionalTask[];
  project?: Project;
  projectId?: string;
}
