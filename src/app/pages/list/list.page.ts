import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../core/models/todo.model';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {

  @Select(state => state.entities.toDos) toDos$: Observable<ToDo[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
