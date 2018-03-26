import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent]
})
export class SharedAuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedAuthModule,
      providers: [
        AuthService
      ]
    };
  }
}
