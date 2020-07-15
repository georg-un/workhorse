import { Comment } from '../models/comment.model';

const C1: Comment = {
  id: 'C1',
  content: 'This is a comment.',
  createDate: new Date().toISOString()
};

const C2: Comment = {
  id: 'C2',
  content: '- [x] Wheat\n-[ ] Yeast\n- [x] Tomato Puree\n- [ ] Mozzarella',
  createDate: '2020-05-10T18:00:00.000Z'
};

const C3: Comment = {
  id: 'C3',
  content: 'This is inline code: `console.log("btw, how much is the fish?")`.',
  createDate: undefined
};

const C4: Comment = {
  id: 'C4',
  content: `
  This is a code block:
  \`\`\`typescript
  console.log("hyper hyper");
  \`\`\`
  `,
  createDate: '2020-01-04T09:00:00.000Z'
};

export const COMMENTS = [
  C1, C2, C3, C4
];
