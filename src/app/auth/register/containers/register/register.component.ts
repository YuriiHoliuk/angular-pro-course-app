import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../../shared-auth/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  async signUp(event: FormGroup) {
    const { email, password } = event.value;

    try {
      await this.authService.signUp(email, password);
      this.router.navigate(['/']);
    } catch (error) {
      this.error = error.message;
    }
  }
}
