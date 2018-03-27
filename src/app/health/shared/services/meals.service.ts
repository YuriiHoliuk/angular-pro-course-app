import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { filter, map, tap } from 'rxjs/operators';

// firebase
import { AngularFireDatabase } from 'angularfire2/database';

// store
import { Store } from '../../../store';

// services
import { AuthService } from '../../../auth/shared-auth/services/auth.service';

// models
import { Meal } from '../../models/meal';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MealsService {

  meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`)
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(action => {
        const data = action.payload.val();
        const $key = action.payload.key;

        return { ...data, $key };
      })),
      tap((meals: Meal[]) => this.store.set('meals', meals))
    );

  get uid(): string {
    return this.authService.user.uid;
  }

  constructor(private store: Store,
              private db: AngularFireDatabase,
              private authService: AuthService) {
  }

  getMeal(key: string): Observable<Meal> {
    if (!key) {
      return of({} as Meal);
    }

    return this.store.select<Meal[]>('meals')
      .pipe(
        filter(Boolean),
        map((meals: Meal[]) => meals.find(({ $key }) => $key === key))
      );
  }

  addMeal(meal: Meal): PromiseLike<any> {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }

  updateMeal(key: string, meal: Meal): Promise<any> {
    return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  }

  removeMeal(key: string): Promise<any> {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }
}
