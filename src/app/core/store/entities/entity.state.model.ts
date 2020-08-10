import { ToDo } from '../../models/todo.model';
import { Comment } from  '../../models/comment.model';
import { Category } from '../../models/category.model';

export interface EntityStateModel {
  toDos: ToDo[];
  comments: Comment[];
  categories: Category[];
}
