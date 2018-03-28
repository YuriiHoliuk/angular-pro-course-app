import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from '../../../models/meal';
import { Workout } from '../../../models/workout';

@Component({
  selector:        'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     './list-item.component.html',
  styleUrls:       ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() item: Meal | Workout;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  toggled = false;

  getIngredients(item: Meal | Workout): string[] {
    return this.hasIngredients(item) ? (item as Meal).ingredients : null;
  }

  constructor() {
  }

  getRoute(item: Meal | Workout) {
    return [`../${this.hasIngredients(item) ? 'meals' : 'workouts'}`, item.$key];
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  hasIngredients(item: Meal | Workout): boolean {
    return Object.prototype.hasOwnProperty.call(item, 'ingredients');
  }
}
