import { Status } from './status.enum';

export class ToDo {
  id: string;
  title: string;
  status: Status;
  comments?: string[];
  categories?: string[];
  dueDate?: string;
  children?: string[];
  dependencies?: string[];
}
