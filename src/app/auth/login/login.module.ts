import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared modules
import { SharedAuthModule } from '../shared-auth/shared-auth.module';

// containers
import { LoginComponent } from './containers/login/login.component';

const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports:      [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedAuthModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {
}
