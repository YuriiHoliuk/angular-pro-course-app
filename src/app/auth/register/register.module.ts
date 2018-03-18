import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedAuthModule } from '../shared-auth/shared-auth.module';
import { RegisterComponent } from './containers/register/register.component';

const ROUTES: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedAuthModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
