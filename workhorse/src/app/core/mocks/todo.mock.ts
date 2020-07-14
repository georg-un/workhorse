import { ToDo } from '../models/todo.model';
import { Status } from '../models/status.enum';


// Category: Music
const T1 = new ToDo();
T1.id = 'TODOID1';
T1.title = 'Get a guitar';
T1.status = Status.Open;
T1.categories = ['ID1'];
T1.children = ['TODOID2', 'TODOID3'];

const T2 = new ToDo();
T2.id = 'TODOID2';
T2.title = 'Look for good guitars';
T2.status = Status.Done;
T2.categories = ['ID1'];

const T3 = new ToDo();
T3.id = 'TODOID3';
T3.title = 'Buy a guitar';
T3.status = Status.Open;
T3.categories = ['ID1'];
T3.dependencies = ['TODOID2'];

const T4 = new ToDo();
T4.id = 'TODOID4';
T4.title = 'Learn how to play';
T4.status = Status.Open;
T4.dueDate = '2021-07-10T18:00:00.000Z';
T4.categories = ['ID1'];


// Category Make a Pizza
const T5 = new ToDo();
T5.id = 'TODOID5';
T5.title = 'Buy ingredients';
T5.status = Status.Open;
T5.categories = ['ID2'];
T5.comments = [
  '- [x] Wheat\n-[ ] Yeast\n- [x] Tomato Puree\n- [ ] Mozzarella'
];

const T6 = new ToDo();
T6.id = 'TODOID6';
T6.title = 'Preheat oven';
T6.status = Status.Waiting;
T6.categories = ['ID2'];

// Uncategorized
const T7 = new ToDo();
T7.id = 'TODOID7';
T7.title = 'Become Iron Man';
T7.status = Status.Open;
T7.dependencies = ['TODOID9'];

const T8 = new ToDo();
T8.id = 'TODOID8';
T8.title = 'Become Stone Man';
T8.status = Status.Canceled;
T8.dependencies = ['TODOID9'];

const T9 = new ToDo();
T9.id = 'TODOID9';
T9.title = 'Find out how one can become a superhero';
T9.status = Status.Open;
