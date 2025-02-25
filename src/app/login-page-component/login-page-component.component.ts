import { RegisterUser } from './../Model/RegisterUser';
import { HttpClient } from '@angular/common/http';
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
import { RegistrationService } from '../Services/Registration.service';
import { error } from 'console';
@Component({
  selector: 'app-login-page-component',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-page-component.component.html',
  styleUrl: './login-page-component.component.css',
})
export class LoginPageComponentComponent extends BaseComponent {
  PasswordVisible: boolean = false;
  loginform: FormGroup;
  validUser: boolean = false;
  UserFound: RegisterUser;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private RegisterUser: RegistrationService
  ) {
    super();
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
      password: ['', [Validators.required]],
    });
  }
  IsPasswordVisible() {
    this.PasswordVisible = !this.PasswordVisible;
  }
  Login() {
    this.RegisterUser.getAllUsers().subscribe({
      next: (data) => {
        data.forEach((user: RegisterUser) => {
          if (user.email === this.loginform.value.email && user.password === this.loginform.value.password) {
            this.UserFound = user;
            this.router.navigate(['/homePage']);
          }
        });
        if (!this.UserFound) {
          alert('User not found');
        }
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
  Register() {
    this.router.navigate(['/register']);
  }
}
