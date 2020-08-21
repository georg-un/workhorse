import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from '../../core/models/status.enum';
import { StatusAction } from './status-action.enum';

@Component({
  selector: 'app-status-buttons',
  templateUrl: './status-buttons.component.html',
  styleUrls: [
    './status-buttons.component.scss',
    '../expansion-item.scss'
  ]
})
export class StatusButtonsComponent implements OnInit {

  @Input() status: Status;
  @Output() buttonClick: EventEmitter<StatusAction> = new EventEmitter<StatusAction>();

  readonly statusEnum: typeof Status = Status;
  readonly statusAction: typeof StatusAction = StatusAction;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(method: string): void {
    this.buttonClick.emit(StatusAction[method]);
  }


}
