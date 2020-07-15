import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { DynamicDialogModule } from '../dynamic-dialog/dynamic-dialog.module';



@NgModule({
  declarations: [CommentsComponent],
  exports: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    MatMenuModule,
    DynamicDialogModule
  ]
})
export class CommentsModule { }
