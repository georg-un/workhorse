import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../core/models/todo.model';
import { TODO_MOCKS } from '../../core/mocks/todo.mock';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {

  toDos: ToDo[];
  toDo$: Observable<ToDo>;

  constructor() { }

  ngOnInit(): void {
    this.toDos = TODO_MOCKS;
    this.toDo$ = of(this.toDos[0]);
  }

}
