import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Workout } from '../../../models/workout';
import { DEFAULT_ENDURANCE, DEFAULT_STRENGTH, DEFAULT_TYPE, DEFAULT_WORKOUT } from '../../constants/defaults';

@Component({
  selector:        'app-workout-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:     './workout-form.component.html',
  styleUrls:       ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnChanges {

  @Input() workout: Workout;

  @Output() create: EventEmitter<Workout> = new EventEmitter();
  @Output() update: EventEmitter<Workout> = new EventEmitter();
  @Output() remove: EventEmitter<Workout> = new EventEmitter();

  toggled = false;
  exists  = false;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    type: DEFAULT_TYPE,
    strength: this.fb.group(DEFAULT_STRENGTH),
    endurance: this.fb.group(DEFAULT_ENDURANCE),
  });

  get formValue(): Workout {
    const { type, endurance, strength, ...rest } = this.form.value as Workout;
    return type === 'endurance'
      ? { ...rest, type, endurance }
      : { ...rest, type, strength };
  }

  get placeholder(): string {
    const name = this.form.get('type').value === 'strength' ? 'Benchpress' : 'Treadmill';
    return `e.g. ${name}`;
  }

  get shouldShowRequiredError(): boolean {
    const control: AbstractControl = this.form.get('name');
    return control.touched && control.hasError('required');
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.workout && this.workout.name) {
      this.exists = true;
      this.form.patchValue(this.workout);
    } else {
      this.exists = false;
      this.form.reset(DEFAULT_WORKOUT);
    }
  }

  createWorkout() {
    if (this.form.valid) {
      this.create.emit(this.formValue);
    }
  }

  updateWorkout() {
    if (this.form.valid) {
      this.update.emit(this.formValue);
    }
  }

  removeWorkout() {
    this.remove.emit(this.formValue);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
