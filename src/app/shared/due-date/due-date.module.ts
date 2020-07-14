import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DueDateComponent } from './due-date.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DueDatePipe } from './due-date.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DueDateComponent,
    DueDatePipe
  ],
  exports: [
    DueDateComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class DueDateModule { }
