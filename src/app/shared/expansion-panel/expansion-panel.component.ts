import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../../core/models/todo.model';
import { Observable } from 'rxjs';
import { Status } from '../../core/models/status.enum';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @Input() toDo$: Observable<ToDo>;

  status$: Observable<Status>;
  dueDate$: Observable<Date>;

  constructor() { }

  ngOnInit(): void {
    this.status$ = this.toDo$.pipe(map(t => t.status));
    this.dueDate$ = this.toDo$.pipe(map(t => new Date(t.dueDate)));
  }

  onStatusButtonClick($event: string): void {
    console.log($event);
  }

  onDueDateSet($event): void {
    console.log($event);
  }
}
