import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { clone } from 'lodash-es';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: [
    './due-date.component.scss',
    '../expansion-item.scss'
  ]
})
export class DueDateComponent implements OnInit {

  private readonly INTERVAL_LENGTH = 1000 * 60 * 2;
  private readonly RANDOM_START_DELAY = Math.floor(Math.random() * 1000 * 30);

  @Input() dueDate: Date;
  @Output() dueDateSet: EventEmitter<Date> = new EventEmitter<Date>();

  updatingDueDate: Date;

  constructor() {
  }

  ngOnInit(): void {
    /**
     * Re-set the updatingDueDate variable every n minutes in order to trigger an update of the text.
     * Wait some random seconds at the beginning to prevent all to-do's updating at the same time.
     */
    this.updatingDueDate = clone(this.dueDate);
    window.setTimeout(() => {
      window.setInterval(() => {
        this.updatingDueDate = clone(this.dueDate);
      }, this.INTERVAL_LENGTH);
    }, this.RANDOM_START_DELAY);
  }

  onCalendarSelection($event: Date): void {
    this.dueDateSet.emit($event);
  }

  onDeleteButtonClick(): void {
    this.dueDateSet.emit(undefined);
  }
}
