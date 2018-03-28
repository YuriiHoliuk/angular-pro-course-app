import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { filter, map, tap } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { Workout } from '../../models/workout';
import { AuthService } from '../../../auth/shared-auth/services/auth.service';
import { Store } from '../../../store';
import { of } from 'rxjs/observable/of';

@Injectable()
export class WorkoutsService {

  workouts$: Observable<Workout[]> = this.db.list(`workouts/${this.uid}`)
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(action => {
        const data = action.payload.val();
        const $key = action.payload.key;

        return { ...data, $key };
      })),
      tap((workouts: Workout[]) => this.store.set('workouts', workouts))
    );

  get uid(): string {
    return this.authService.user.uid;
  }

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) {
  }

  getWorkout(key: string): Observable<Workout> {
    if (!key) {
      return of({} as Workout);
    }

    return this.store.select<Workout[]>('workouts')
      .pipe(
        filter(Boolean),
        map((workouts: Workout[]) => workouts.find(({ $key }) => $key === key))
      );
  }

  addWorkout(workout: Workout): PromiseLike<any> {
    return this.db.list(`workouts/${this.uid}`).push(workout);
  }

  updateWorkout(key: string, workout: Workout): Promise<any> {
    return this.db.object(`workouts/${this.uid}/${key}`).set(workout);
  }

  removeWorkout(key: string): Promise<any> {
    return this.db.list(`workouts/${this.uid}`).remove(key);
  }
}
