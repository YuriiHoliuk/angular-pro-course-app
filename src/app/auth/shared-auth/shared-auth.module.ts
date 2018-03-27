import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { AuthService } from './services/auth.service';

// guards
import { AuthGuard } from './guards/auth.guard';

// components
import { AuthFormComponent } from './components/auth-form/auth-form.component';

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
        AuthService,
        AuthGuard,
      ]
    };
  }
}
