import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { StatusButtonsModule } from '../status-buttons/status-buttons.module';
import { DueDateModule } from '../due-date/due-date.module';



@NgModule({
  declarations: [ExpansionPanelComponent],
  exports: [
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    StatusButtonsModule,
    DueDateModule
  ]
})
export class ExpansionPanelModule { }
