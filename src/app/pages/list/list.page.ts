import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../core/models/todo.model';
import { TODO_MOCKS } from '../../core/mocks/todo.mock';
import { combineLatest, Observable, of } from 'rxjs';
import { Select } from '@ngxs/store';
import { Category } from '../../core/models/category.model';
import { Comment } from '../../core/models/comment.model';
import { mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {

  toDos$: Observable<Observable<ToDo[]>>;

  @Select(state => state.entities.toDos) toDos$: Observable<ToDo[]>;
  @Select(state => state.entities.comments) comments$: Observable<Comment[]>;
  @Select(state => state.entities.categories) categories$: Observable<Category[]>;

  constructor() { }

  ngOnInit(): void {
    this.toDos$ = this.toDos$.pipe(mergeAll());

    this.toDos$ = of(TODO_MOCKS);
  }

}
