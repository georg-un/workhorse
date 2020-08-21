import { ToDo } from '../models/todo.model';
import { Status } from '../models/status.enum';
import { COMMENT_MOCK } from './comment.mock';

const T1 = {
  id: 'TODOID1',
  title: 'Get a guitar',
  status: Status.Open,
  categories: ['ID1'],
  children: ['TODOID2', 'TODOID3']
} as ToDo;


const T2 = {
  id: 'TODOID2',
  title: 'Look for good guitars',
  status: Status.Done,
  categories: ['ID1']
} as ToDo;


const T3 = {
  id: 'TODOID3',
  title: 'Buy a guitar',
  status: Status.Open,
  categories: ['ID1'],
  dueDate: new Date().toISOString(),
  dependencies: ['TODOID2']
} as ToDo;


const T4 = {
  id: 'TODOID4',
  title: 'Learn how to play',
  status: Status.Open,
  dueDate: '2021-07-10T18:00:00.000Z',
  categories: ['ID1'],
  comments: [COMMENT_MOCK[2].id]
} as ToDo;


const T5 = {
  id: 'TODOID5',
  title: 'Buy ingredients',
  status: Status.Open,
  categories: ['ID2', 'ID3'],
  dueDate: new Date(new Date().getTime() + (14 * 1000 * 60 * 60)).toISOString(),
  comments: [COMMENT_MOCK[0].id, COMMENT_MOCK[1].id, COMMENT_MOCK[2].id, COMMENT_MOCK[3].id]
} as ToDo;


const T6 = {
  id: 'TODOID6',
  title: 'Preheat oven',
  status: Status.Waiting,
  categories: ['ID2'],
} as ToDo;


const T7 = {
  id: 'TODOID7',
  title: 'Become Iron Man',
  status: Status.Open,
  dependencies: ['TODOID9']
} as ToDo;


const T8 = {
  id: 'TODOID8',
  title: 'Become Stone Man',
  status: Status.Canceled,
  dependencies: ['TODOID9']
} as ToDo;


const T9 = {
  id: 'TODOID9',
  title: 'Find out how one can become a superhero',
  status: Status.Open
} as ToDo;


export const TODO_MOCKS: ToDo[] = [
  T1, T2, T3, T4, T5, T6, T7, T8, T9
];
