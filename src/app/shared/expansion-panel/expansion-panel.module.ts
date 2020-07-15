import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { StatusButtonsModule } from '../status-buttons/status-buttons.module';
import { DueDateModule } from '../due-date/due-date.module';
import { CommentsModule } from '../comments/comments.module';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [ExpansionPanelComponent],
  exports: [
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    StatusButtonsModule,
    DueDateModule,
    CommentsModule,
    MatDividerModule
  ]
})
export class ExpansionPanelModule { }
