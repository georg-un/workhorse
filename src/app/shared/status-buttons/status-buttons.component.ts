import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from '../../core/models/status.enum';
import { StatusAction } from './status-action.enum';
import { DynamicDialogData } from '../dynamic-dialog/dynamic-dialog-data.model';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';
import { take } from 'rxjs/operators';
import { archiveToDoData, deleteToDoData } from './status-buttons.dialog-data';

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

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onClick(method: StatusAction): void {
    if (method === StatusAction.DELETE) {
      this.emitOnUserConfirmation(method, deleteToDoData);
    } else if (method === StatusAction.ARCHIVE) {
      this.emitOnUserConfirmation(method, archiveToDoData);
    } else {
      this.buttonClick.emit(StatusAction[method]);
    }
  }

  private emitOnUserConfirmation(method: StatusAction, dialogData: DynamicDialogData): void {
    const dialogRef = this.dialog.open(DynamicDialogComponent, {
      data: dialogData
    });
    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((result: boolean) => {
        if (result === true) {
          this.buttonClick.emit(StatusAction[method]);
        }
      });
  }

}
