import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../core/models/comment.model';
import { take } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog.component';
import { deleteCommentDialogData } from './comments.dialog-data';

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

  @Input() comments$: Observable<Comment[]>;

  /**
   * Emits the content of a newly added comment
   */
  @Output() commentAdded: EventEmitter<Comment> = new EventEmitter<Comment>();

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
      this.commentAdded.emit(
        {
          id: 'comment_' + new Date().getTime().toString(),  // TODO generate a useful ID
          content: content,
          createDate: new Date().getTime().toString()
        } as Comment
      );
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
    const dialogRef = this.dialog.open(DynamicDialogComponent, {
      data: deleteCommentDialogData
    });
    dialogRef.afterClosed()
      .pipe(take(1))
      .subscribe((result: boolean) => {
        if (result === true) {
          this.commentDeleted.emit(commentId);
        }
      });
  }
}
