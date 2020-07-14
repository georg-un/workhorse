import { Category } from '../models/category.model';

const C1 = new Category();
C1.id = 'ID1';
C1.label = 'Learn Guitar';
C1.color = '#fc5603';

const C2 = new Category();
C2.id = 'ID2';
C2.label = 'Make Pizza';
C2.color = '#03fc67';

const C3 = new Category();
C3.id = 'ID3';
C3.label = 'Adopt a Penguin';
C3.color = '#ba03fc';


export const CATEGORY_MOCK = [
  C1,
  C2,
  C3
];
