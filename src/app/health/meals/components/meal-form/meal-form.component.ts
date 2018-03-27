import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meal } from '../../../models/meal';

@Component({
  selector:        'app-meal-form',
  templateUrl:     './meal-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls:       ['./meal-form.component.scss']
})
export class MealFormComponent implements OnChanges {

  @Input() meal: Meal;

  @Output() create: EventEmitter<Meal> = new EventEmitter();
  @Output() update: EventEmitter<Meal> = new EventEmitter();
  @Output() remove: EventEmitter<Meal> = new EventEmitter();

  toggled = false;
  exists = false;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  get shouldShowRequiredError(): boolean {
    const control: AbstractControl = this.form.get('name');
    return control.touched && control.hasError('required');
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.meal && this.meal.name) {
      this.exists = true;

      this.form.patchValue(this.meal);
      this.clearIngredients();

      this.meal.ingredients.forEach((ingredient: string) => this.ingredients.push(new FormControl(ingredient)));

    } else {
      this.exists = false;

      this.clearIngredients();
      this.ingredients.push(new FormControl(''));

      this.form.reset({ name: '', ingredients: [''] });
    }
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateMeal() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeMeal() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  private clearIngredients() {
    while (this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }
}
