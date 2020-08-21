import { Category } from '../models/category.model';

const C1 = {
  id: 'ID1',
  label: 'Learn Guitar',
  color: '#fc5603',
} as Category;

const C2 = {
  id: 'ID2',
  label: 'Make Pizza',
  color: '#03fc67',
} as Category;

const C3 = {
  id: 'ID3',
  label: 'Adopt a Penguin',
  color: '#ba03fc',
} as Category;


export const CATEGORY_MOCK = [
  C1,
  C2,
  C3
];
