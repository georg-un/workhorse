import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusButtonsComponent } from './status-buttons.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [StatusButtonsComponent],
  exports: [
    StatusButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class StatusButtonsModule { }
