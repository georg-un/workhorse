import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dueDate'})
export class DueDatePipe implements PipeTransform {
  transform(date: Date): string {
    if (date?.getTime()) {
      const daysLeft = (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
      if (daysLeft < 0) {
        if (daysLeft > -1) {
          return 'Today';
        } else {
          return date.toLocaleDateString();
        }
      } else {
        if (daysLeft <= 14) {
          if (Math.floor(daysLeft) === 1) {
            return `${Math.floor(daysLeft)} day left: ${date.toLocaleDateString()}`;
          } else {
            return `${Math.floor(daysLeft)} days left: ${date.toLocaleDateString()}`;
          }
        } else {
          return date.toLocaleDateString();
        }
      }
    } else {
      return 'No due date';
    }
/*  // implements time (use this, if time is supported in the future)
    if (date?.getTime()) {
      const timeLeft = date.getTime() - new Date().getTime();
      const minutes = timeLeft / (1000 * 60);
      const hours = minutes / 60;
      const days = hours / 24;
      if (timeLeft <= 0) {
        if ((timeLeft / (1000 * 60)) > -15) {
          return 'Now';
        } else {
          return date.toLocaleDateString();
        }
      } else {
        if (minutes < 60) {
          return `${Math.floor(minutes)} minute(s) left.`;
        } else if (hours < 24) {
          return `${Math.floor(hours)} hour(s) left.`;
        } else if (days <= 14) {
          return `${Math.floor(days)} day(s) left.`;
        } else {
          return date.toLocaleDateString();
        }
      }
    } else {
      return 'No due date';
    }
*/
  }
}
