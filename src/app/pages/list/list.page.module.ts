import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPage } from './list.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelModule } from '../../shared/expansion-panel/expansion-panel.module';



@NgModule({
  declarations: [ListPage],
  imports: [
    CommonModule,
    MatExpansionModule,
    ExpansionPanelModule
  ]
})
export class ListPageModule { }
