import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: [
    './due-date.component.scss',
    '../expansion-item.scss'
  ]
})
export class DueDateComponent implements OnInit {

  @Input() dueDate$: Observable<Date>;
  @Output() dueDateSet: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

  onCalendarSelection($event: Date): void {
    this.dueDateSet.emit($event);
  }

  onDeleteButtonClick(): void {
    this.dueDateSet.emit(undefined);
  }
}
