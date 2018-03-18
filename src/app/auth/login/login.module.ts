import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedAuthModule } from '../shared-auth/shared-auth.module';
import { LoginComponent } from './containers/login/login.component';

const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedAuthModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
