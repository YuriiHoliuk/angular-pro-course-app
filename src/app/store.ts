import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { distinctUntilChanged, pluck } from 'rxjs/operators';

import { User } from './auth/models/user';
import { Meal } from './health/models/meal';

export interface State {
  user: User;
  meals: Meal[];
  [key: string]: any;
}

const initialState: State = {
  user: null,
  meals: null,
};

export class Store {

  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject
    .asObservable()
    .pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store
      .pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
