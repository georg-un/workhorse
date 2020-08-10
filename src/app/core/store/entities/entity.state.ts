import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { TODO_MOCKS } from '../../mocks/todo.mock';
import { EntityStateModel } from './entity.state.model';
import { COMMENT_MOCK } from '../../mocks/comment.mock';
import { CATEGORY_MOCK } from '../../mocks/category.mock';

@State<EntityStateModel>({
  name: 'entities',
  defaults: {
    toDos: TODO_MOCKS,
    comments: COMMENT_MOCK,
    categories: CATEGORY_MOCK
  } as EntityStateModel
})
@Injectable()
export class EntityState {
}
