import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { distinctUntilChanged, pluck } from 'rxjs/operators';

export interface State {
  [key: string]: any;
}

const initialState: State = {
  title: 'Awesome title from store',
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
