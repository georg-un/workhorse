import { ToDo } from '../../models/todo.model';
import { Comment } from '../../models/comment.model';
import { Status } from '../../models/status.enum';

export class AddToDo {
  static readonly type = '[ToDo] Add ToDo';
  constructor(public payload: {toDo: ToDo}) {}
}

export class DeleteToDo {
  static readonly type = '[ToDo] Delete ToDo';
  constructor(public payload: {toDoId: string}) {}
}

export class SetDueDate {
  static readonly type = '[ToDo] Set Due-date';
  constructor(public payload: {toDoId: string, dueDate: Date}) {}
}

export class SetStatus {
  static readonly type = '[ToDo] Set Status';
  constructor(public payload: {toDoId: string, status: Status}) {}
}

export class AddComment {
  static readonly type = '[ToDo] Add Comment';
  constructor(public payload: {toDoId: string, comment: Comment}) {}
}

export class EditComment {
  static readonly type = '[ToDo] Edit Comment';
  constructor(public payload: {comment: Comment}) {}
}

export class DeleteComment {
  static readonly type = '[ToDo] Delete Comment';
  constructor(public payload: {commentId: string}) {}
}

export class AddCategory {
  static readonly type = '[ToDo] Add Category';
  constructor(public payload: {toDoId: string, categoryId: string}) {}
}

export class RemoveCategory {
  static readonly type = '[ToDo] Remove Category';
  constructor(public payload: {toDoId: string, categoryId: string}) {}
}
