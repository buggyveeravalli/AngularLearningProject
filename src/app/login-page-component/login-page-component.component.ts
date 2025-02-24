import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseComponent } from '../NavigationGaurd/BaseComponent';
@Component({
  selector: 'app-login-page-component',
  imports: [FormsModule, CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './login-page-component.component.html',
  styleUrl: './login-page-component.component.css',
})
export class LoginPageComponentComponent extends BaseComponent {

  PhoneNumber: string = '';
  Password: string = '';
  PasswordVisible: boolean = false;
  loginform: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    super();
    this.loginform = this.fb.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^\d+$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  IsPasswordVisible() {
    this.PasswordVisible = !this.PasswordVisible;
  }
  Login() {
    if (this.loginform.valid) {
      console.log(this.loginform.value);
      this.PhoneNumber = this.loginform.value.phoneNumber;
      this.Password = this.loginform.value.password;
      console.log(this.PhoneNumber + ' ' + this.Password);
    }
  }
  Register(){ 
    this.router.navigate(['/register']);
  }
}
