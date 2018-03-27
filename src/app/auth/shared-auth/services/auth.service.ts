import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { tap } from 'rxjs/operators';

import { Store } from '../../../store';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  auth$ = this.fireAuth.authState
    .pipe(tap(next => {
      if (!next) {
        this.store.set('user', null);
        return;
      }

      const user: User = {
        email:         next.email,
        uid:           next.uid,
        authenticated: true,
      };

      this.store.set('user', user);
    }));

  get user() {
    return this.fireAuth.auth.currentUser;
  }

  get authState(): Observable<any> {
    return this.fireAuth.authState;
  }

  constructor(private fireAuth: AngularFireAuth, private store: Store) {
  }

  signIn(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }
}
