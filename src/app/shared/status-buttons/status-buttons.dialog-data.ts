import { DynamicDialogButton, DynamicDialogData } from '../dynamic-dialog/dynamic-dialog-data.model';

export const deleteToDoData = {
  bodyHTML: `
    Are you sure you want to delete this to-do?
    <br/><br/>
    This action cannot be undone.
    <br/><br/>
    `,
  buttons: [
    {
      index: 0,
      label: 'Cancel',
      result: false
    } as DynamicDialogButton,
    {
      index: 1,
      label: 'Delete',
      color: 'warn',
      result: true
    } as DynamicDialogButton
  ]
} as DynamicDialogData;

export const archiveToDoData = {
  bodyHTML: `
    Are you sure you want to archive this to-do?
    <br/><br/>
    This action cannot be undone.
    <br/><br/>
    `,
  buttons: [
    {
      index: 0,
      label: 'Cancel',
      result: false
    } as DynamicDialogButton,
    {
      index: 1,
      label: 'Archive',
      color: 'warn',
      result: true
    } as DynamicDialogButton
  ]
} as DynamicDialogData;
