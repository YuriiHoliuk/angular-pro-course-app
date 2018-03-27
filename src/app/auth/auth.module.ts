import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// shared modules
import { SharedAuthModule } from './shared-auth/shared-auth.module';

const firebaseConfig: FirebaseAppConfig = {
  apiKey:            'AIzaSyAhkE71poNjGkNZzxnM1NeKKEDNVEcBtbU',
  authDomain:        'angular-pro-course-app.firebaseapp.com',
  databaseURL:       'https://angular-pro-course-app.firebaseio.com',
  projectId:         'angular-pro-course-app',
  storageBucket:     'angular-pro-course-app.appspot.com',
  messagingSenderId: '306401491714'
};

const ROUTES: Routes = [
  {
    path:       'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path:         'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path:         'register',
        loadChildren: './register/register.module#RegisterModule'
      },
    ]
  },
];

@NgModule({
  imports:      [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedAuthModule.forRoot(),
  ],
})
export class AuthModule {
}
