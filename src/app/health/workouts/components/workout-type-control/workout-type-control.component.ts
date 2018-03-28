import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { WorkoutType } from '../../../models/workout';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TYPE_CONTROL_ACCESSOR = {
  provide:     NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorkoutTypeControlComponent),
  multi:       true,
};

@Component({
  selector:        'app-workout-type-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     './workout-type-control.component.html',
  styleUrls:       ['./workout-type-control.component.scss'],
  providers:       [TYPE_CONTROL_ACCESSOR],
})
export class WorkoutTypeControlComponent implements ControlValueAccessor {

  selectors: WorkoutType[] = ['strength', 'endurance'];

  value: WorkoutType;

  private propagateTouch: Function;
  private propagateChange: Function;

  constructor() {
  }

  setSelector(selector: WorkoutType) {
    this.value = selector;
    this.propagateTouch();
    this.propagateChange(selector);
  }

  registerOnTouched(fn: Function) {
    this.propagateTouch = fn;
  }

  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }

  writeValue(value: WorkoutType) {
    if (value !== void(0)) {
      this.value = value;
    }
  }
}
