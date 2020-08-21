import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { TODO_MOCKS } from '../../mocks/todo.mock';
import { EntityStateModel } from './entity.state.model';
import { COMMENT_MOCK } from '../../mocks/comment.mock';
import { CATEGORY_MOCK } from '../../mocks/category.mock';
import * as entityActions from './entity.actions';
import { patch, removeItem, updateItem } from '@ngxs/store/operators';
import { ToDo } from '../../models/todo.model';
import { Comment } from '../../models/comment.model';
import { cloneDeep } from 'lodash-es';

@State<EntityStateModel>({
  name: 'entities',
  defaults: {
    toDos: TODO_MOCKS,
    comments: COMMENT_MOCK,
    categories: CATEGORY_MOCK
  } as EntityStateModel
})
@Injectable()
export class EntityState {

  @Action(entityActions.AddToDo)
  _addToDo(ctx: StateContext<EntityStateModel>, action: entityActions.AddToDo): void {
    this.addToDo(ctx, action.payload.toDo);
  }

  @Action(entityActions.DeleteToDo)
  _deleteToDo(ctx: StateContext<EntityStateModel>, action: entityActions.DeleteToDo): void {
    const commentIds: string[] = this.findMutableToDo(ctx, action.payload.toDoId)?.comments;
    commentIds?.forEach(commentId => this.deleteComment(ctx, commentId));
    this.deleteToDo(ctx, action.payload.toDoId);
  }

  @Action(entityActions.SetDueDate)
  _setDueDate(ctx: StateContext<EntityStateModel>, action: entityActions.SetDueDate): void {
    this.updateToDo(ctx, action.payload.toDoId, {dueDate: action.payload.dueDate?.toISOString()});
  }

  @Action(entityActions.SetStatus)
  _setStatus(ctx: StateContext<EntityStateModel>, action: entityActions.SetStatus): void {
    this.updateToDo(ctx, action.payload.toDoId, {status: action.payload.status});
  }

  @Action(entityActions.AddComment)
  _addComment(ctx: StateContext<EntityStateModel>, action: entityActions.AddComment): void {
    const toDo = this.findMutableToDo(ctx, action.payload.toDoId);
    if (toDo) {
      this.addComment(ctx, action.payload.comment);
      const comments: string[] = toDo.comments || [];
      comments.push(action.payload.comment.id);
      this.updateToDo(ctx, action.payload.toDoId, {comments: comments});
    } else {
      console.error('Could not find to-do with id: ' + action.payload.toDoId);
    }
  }

  @Action(entityActions.EditComment)
  _editComment(ctx: StateContext<EntityStateModel>, action: entityActions.EditComment): void {
    this.updateComment(ctx, action.payload.comment.id, {content: action.payload.comment.content});
  }

  @Action(entityActions.DeleteComment)
  _deleteComment(ctx: StateContext<EntityStateModel>, action: entityActions.DeleteComment): void {
    this.deleteComment(ctx, action.payload.commentId);
  }

  @Action(entityActions.AddCategory)
  _addCategory(ctx: StateContext<EntityStateModel>, action: entityActions.AddCategory): void {
    const categoryIds: string[] = this.findMutableToDo(ctx, action.payload.toDoId)?.categories || [];
    categoryIds.push(action.payload.categoryId);
    this.updateToDo(ctx, action.payload.toDoId, {categories: categoryIds});
  }

  @Action(entityActions.RemoveCategory)
  _removeCategory(ctx: StateContext<EntityStateModel>, action: entityActions.RemoveCategory): void {
    let categoryIds: string[] = this.findMutableToDo(ctx, action.payload.toDoId)?.categories || [];
    categoryIds = categoryIds.filter(c => c !== action.payload.categoryId);
    this.updateToDo(ctx, action.payload.toDoId, {categories: categoryIds});
  }

  private findMutableToDo(ctx: StateContext<EntityStateModel>, toDoId: string): ToDo {
    return cloneDeep(ctx.getState().toDos.find(t => t.id === toDoId));
  }

  private addToDo(ctx: StateContext<EntityStateModel>, toDo: ToDo): void {
    ctx.patchState({
      toDos: [
        ...ctx.getState().toDos,
        toDo,
      ]
    });
  }

  private updateToDo(ctx: StateContext<EntityStateModel>, toDoId: string, update: object): void {
    ctx.setState(
      patch({
        toDos: updateItem<ToDo>(t => t.id === toDoId, patch(update))
      })
    );
  }

  private deleteToDo(ctx: StateContext<EntityStateModel>, toDoId: string): void {
    ctx.setState(
      patch({
        toDos: removeItem<ToDo>(t => t.id === toDoId)
      })
    );
  }

  private addComment(ctx: StateContext<EntityStateModel>, comment: Comment): void {
    ctx.patchState({
      comments: [
        ...ctx.getState().comments,
        comment
      ]
    });
  }

  private updateComment(ctx: StateContext<EntityStateModel>, commentId: string, update: object): void {
    ctx.setState(
      patch({
        comments: updateItem<Comment>(c => c.id === commentId, patch(update))
      })
    );
  }

  private deleteComment(ctx: StateContext<EntityStateModel>, commentId: string): void {
    ctx.setState(
      patch({
        comments: removeItem<Comment>(c => c.id === commentId)
      })
    );
  }
}
