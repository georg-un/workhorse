import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../core/models/todo.model';
import { Observable, of } from 'rxjs';
import { Status } from '../../core/models/status.enum';
import { map } from 'rxjs/operators';
import { Comment } from '../../core/models/comment.model';
import { Category } from '../../core/models/category.model';
import { Select } from '@ngxs/store';

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
  dueDate$: Observable<Date>;
  comments$: Observable<Comment[]>;
  categories$: Observable<Category[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.status = this.toDo.status;
    this.dueDate$ = of(new Date(this.toDo.dueDate));
    this.comments$ = this.allComments$.pipe(
      map(comments => comments.filter(c => this.toDo.comments?.includes(c.id)))
    );
    this.categories$ = this.allCategories$.pipe(
      map(categories => categories.filter(c => this.toDo.categories?.includes(c.id)))
    );
  }

  onStatusButtonClick($event: string): void {
    console.log({statusButtonClick: $event});
  }

  onDueDateSet($event): void {
    console.log({dueDateSet: $event});
  }

  onCommentAdded($event: string): void {
    console.log({commentAdded: $event});
  }

  onCommentEdited($event: Comment): void {
    console.log({commentEdited: $event});
  }

  onCommentDeleted($event: string): void {
    console.log({commentDeleted: $event});
  }

  onCategoryAdded($event: string): void {
    console.log({categoryAdded: $event});
  }

  onCategoryRemoved($event: string): void {
    console.log({categoryRemoved: $event});
  }
}
