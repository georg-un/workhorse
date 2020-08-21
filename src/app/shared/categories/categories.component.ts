import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../core/models/category.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { map, startWith, take, withLatestFrom } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.scss',
    '../expansion-item.scss'
  ]
})
export class CategoriesComponent implements OnInit {

  /**
   * The categories assigned to a to-do
   */
  @Input() categories$: Observable<Category[]>;

  /**
   * All available categories
   */
  @Input() allCategories$: Observable<Category[]>;

  /**
   * Emits the id of an added category
   */
  @Output() categoryAdded$: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Emits the id of a removed category
   */
  @Output() categoryRemoved$: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryControl = new FormControl();
  filteredCategories$: Observable<Category[]>;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.filteredCategories$ =
      this.categoryControl.valueChanges.pipe(
        startWith(null),
        withLatestFrom(this.allCategories$),
        map(([categoryInput, allCategories]: [string | null, Category[]]) => {
          return categoryInput ? this.filter(categoryInput, allCategories) : allCategories.slice();
        }));
  }

  onCategoryAdd(event: MatChipInputEvent): void {
    if ((event.value || '').trim()) {
      this.addCategory(event.value.trim());
    }
  }

  onCategorySelected(event: MatAutocompleteSelectedEvent): void {
    this.addCategory(event.option.value);
  }

  onCategoryRemove(categoryId: string): void {
    this.categoryRemoved$.emit(categoryId);
  }

  private addCategory(categoryId: string): void {
    this.allCategories$
      .pipe(take(1))
      .subscribe(categories => {
        if (categories.map(c => c.id).includes(categoryId)) {
          this.categoryAdded$.emit(categoryId);
          this.categoryInput.nativeElement.value = '';
          this.categoryControl.setValue(null);
        } else {
          this.snackBar.open(
            'Unrecognized category. Add new categories in the settings.'
          );
        }
      });
  }

  private filter(value: string, allCategories: Category[]): Category[] {
    const filterValue = value.toLowerCase();
    return allCategories.filter(c => c.label.toLowerCase().indexOf(filterValue) === 0);
  }
}
