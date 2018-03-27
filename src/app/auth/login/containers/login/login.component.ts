import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

// services
import { AuthService } from '../../../shared-auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string;

  constructor(private authService: AuthService) { }

  async signIn(event: FormGroup) {
    const { email, password } = event.value;

    try {
      await this.authService.signIn(email, password);
      this.error = null;
    } catch (error) {
      this.error = error.message;
    }
  }
}
