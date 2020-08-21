import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../core/models/comment.model';
import { take } from 'rxjs/operators';
import { DynamicDialogButton, DynamicDialogData } from '../dynamic-dialog/dynamic-dialog-data.model';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: [
    './comments.component.scss',
    '../expansion-item.scss'
  ],
  preserveWhitespaces: true  // required for ngx-markdown
})
export class CommentsComponent implements OnInit {

  private readonly deleteCommentDialogData = {
    bodyHTML: `
    Are you sure you want to delete this comment?
    <br/><br/>
    This action cannot be undone.
    <br/><br/>
    `,
    buttons: [
      {
        index: 0,
        label: 'Cancel',
        result: false
      } as DynamicDialogButton,
      {
        index: 1,
        label: 'Delete',
        color: 'warn',
        result: true
      } as DynamicDialogButton
    ]
  } as DynamicDialogData;

  @Input() comments$: Observable<Comment[]>;

  /**
   * Emits the content of a newly added comment
   */
  @Output() commentAdded: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Emits a changed comment
   */
  @Output() commentEdited: EventEmitter<Comment> = new EventEmitter<Comment>();

  /**
   * Emits the ID of a deleted comment
   */
  @Output() commentDeleted: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  onCommentSave(commentId: string, content: string): void {
    if (commentId === 'new') {
      this.commentAdded.emit(content);
    } else {
      this.comments$
        .pipe(take(1))
        .subscribe(comments => {
          const comment: Comment = Object.assign(
            {},
            comments.filter(c => c.id === commentId)[0]
          );
          comment.content = content;
          this.commentEdited.emit(comment);
        });
    }
  }

  onCommentDelete(commentId: string): void {
    const dialogref = this.dialog.open(DynamicDialogComponent, {
      data: this.deleteCommentDialogData
    });
    dialogref.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        this.commentDeleted.emit(commentId);
      }
    });

  }
}
