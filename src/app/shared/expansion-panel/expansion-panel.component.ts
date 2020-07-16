import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../core/models/todo.model';
import { Observable } from 'rxjs';
import { Status } from '../../core/models/status.enum';
import { map } from 'rxjs/operators';
import { Comment } from '../../core/models/comment.model';
import { COMMENTS } from '../../core/mocks/comment.mock';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() toDo$: Observable<ToDo>;

  status$: Observable<Status>;
  dueDate$: Observable<Date>;
  comments$: Observable<Comment[]>;

  constructor() { }

  ngOnInit(): void {
    this.status$ = this.toDo$.pipe(map(t => t.status));
    this.dueDate$ = this.toDo$.pipe(map(t => new Date(t.dueDate)));
    this.comments$ = this.toDo$.pipe(map(t => COMMENTS.filter(c => t.comments.includes(c.id))));
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

}