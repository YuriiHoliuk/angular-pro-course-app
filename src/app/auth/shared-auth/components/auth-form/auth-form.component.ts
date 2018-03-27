import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<FormGroup> = new EventEmitter();

  form: FormGroup = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  get shouldShowEmailError(): boolean {
    const control: AbstractControl = this.form.get('email');
    return control.touched && control.hasError('email');
  }

  get shouldShowPasswordError(): boolean {
    const control: AbstractControl = this.form.get('password');
    return control.touched && control.hasError('required');
  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }
}
