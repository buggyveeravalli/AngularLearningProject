import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegistrationService } from '../Services/Registration.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BaseComponent } from '../NavigationGaurd/BaseComponent';
import { Router } from '@angular/router';
import { RegisterUser } from '../Model/RegisterUser';
import { resolve } from 'path';

@Component({
  selector: 'app-registration-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-component.component.html',
  styleUrl: './registration-component.component.css',
})
export class RegistrationComponentComponent extends BaseComponent {
  registrationForm: FormGroup;
  isLoading: boolean = false;
  router: any;
  constructor(private route: Router, private fb: FormBuilder, private registrationService: RegistrationService) {
    super();
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      lastName: ['', [Validators.required, Validators.maxLength(6)]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pinCode: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  goBackToLogin() {
    this.route.navigate(['/login']);
  }
  async onSubmit() {
    if (this.registrationForm.valid && !(await this.EmailExist())) { 
      this.isLoading = true;
      this.registrationService.createRegistration(this.registrationForm.value).subscribe({
        next: () => { 
          this.isLoading = false; 
          alert('Registration successful!'); 
          this.registrationForm.reset();
        },
        error: () => {
          this.isLoading = false;
          alert('Registration failed. Please try again.');
        },
      });
    }
  }

  EmailExist(): Promise<boolean> {
    return new Promise((resolve) => {
      this.registrationService.getAllUsers().subscribe({
        next: (data) => {
          const isExists = data.some((user: RegisterUser) => user.email === this.registrationForm.value.email);
          if (isExists) {
            alert("Email Already Exists");
            this.registrationForm.controls['email'].reset();
            resolve(true);
          } else {
            resolve(false);
          }
        },
      });
    });
  }
  
}
