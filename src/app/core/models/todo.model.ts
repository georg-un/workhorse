import { Status } from './status.enum';

export interface ToDo {
  id: string;
  title: string;
  status: Status;
  comments?: string[];
  categories?: string[];
  dueDate?: string;
  children?: string[];
  dependencies?: string[];
}
