import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Workout } from '../../../models/workout';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '../../../../store';
import { WorkoutsService } from '../../../shared/services/workouts.service';

@Component({
  selector:    'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls:   ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  workouts$: Observable<Workout[]>;

  private subscription: Subscription;

  constructor(private store: Store,
              private workoutsService: WorkoutsService) { }

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>('workouts');
    this.subscription = this.workoutsService.workouts$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeWorkout(event: Workout) {
    this.workoutsService.removeWorkout(event.$key);
  }
}
