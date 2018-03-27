import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// store
import { Store } from '../../store';

// services
import { AuthService } from '../../auth/shared-auth/services/auth.service';

// models
import { User } from '../../auth/models/user';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title$: Observable<string>;
  user$: Observable<User>;

  private subscription: Subscription;

  constructor(private store: Store,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();

    this.title$ = this.store.select('title');
    this.user$  = this.store.select('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
}
