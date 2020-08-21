import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../core/models/todo.model';
import { Observable } from 'rxjs';
import { Status } from '../../core/models/status.enum';
import { map } from 'rxjs/operators';
import { Comment } from '../../core/models/comment.model';
import { Category } from '../../core/models/category.model';
import { Select, Store } from '@ngxs/store';
import { StatusAction } from '../status-buttons/status-action.enum';
import * as entityActions from '../../core/store/entities/entity.actions';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() toDo: ToDo;

  @Select(state => state.entities.comments) allComments$: Observable<Comment[]>;
  @Select(state => state.entities.categories) allCategories$: Observable<Category[]>;

  status: Status;
  dueDate: Date;
  comments$: Observable<Comment[]>;
  categories$: Observable<Category[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.status = this.toDo.status;
    this.dueDate = new Date(this.toDo.dueDate);
    this.comments$ = this.allComments$.pipe(
      map(comments => comments.filter(c => this.toDo.comments?.includes(c.id)))
    );
    this.categories$ = this.allCategories$.pipe(
      map(categories => categories.filter(c => this.toDo.categories?.includes(c.id)))
    );
  }

  onStatusButtonClick(statusAction: StatusAction): void {
    switch (statusAction) {
      case StatusAction.DONE:
        this.store.dispatch(new entityActions.SetStatus({toDoId: this.toDo.id, status: Status.Done}));
        break;
      case StatusAction.ON_HOLD:
        this.store.dispatch(new entityActions.SetStatus({toDoId: this.toDo.id, status: Status.Waiting}));
        break;
      case StatusAction.CANCEL:
        this.store.dispatch(new entityActions.SetStatus({toDoId: this.toDo.id, status: Status.Canceled}));
        break;
      case StatusAction.REOPEN:
        this.store.dispatch(new entityActions.SetStatus({toDoId: this.toDo.id, status: Status.Open}));
        break;
      case StatusAction.ARCHIVE:
        // TODO
        break;
      case StatusAction.DELETE:
        this.store.dispatch(new entityActions.DeleteToDo({toDoId: this.toDo.id}));
        break;
    }
  }

  onDueDateSet(dueDate: Date): void {
    this.store.dispatch(new entityActions.SetDueDate({toDoId: this.toDo.id, dueDate: dueDate}));
  }

  onCommentAdded(comment: Comment): void {
    this.store.dispatch(new entityActions.AddComment({toDoId: this.toDo.id, comment: comment}));
  }

  onCommentEdited(comment: Comment): void {
    this.store.dispatch(new entityActions.EditComment({comment: comment}));
  }

  onCommentDeleted(commentId: string): void {
    this.store.dispatch(new entityActions.DeleteComment({commentId: commentId}));
  }

  onCategoryAdded(categoryId: string): void {
    this.store.dispatch(new entityActions.AddCategory({toDoId: this.toDo.id, categoryId: categoryId}));
  }

  onCategoryRemoved(categoryId: string): void {
    this.store.dispatch(new entityActions.RemoveCategory({toDoId: this.toDo.id, categoryId: categoryId}));
  }
}
