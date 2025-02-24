import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Services/Registration.service';
import { RegisterUser } from '../Model/RegisterUser';

@Component({
  selector: 'app-user-data-presentation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-data-presentation.component.html',
  styleUrls: ['./user-data-presentation.component.css'],
})
export class UserDataPresentationComponent implements OnInit {

  users: RegisterUser[] = [];
  isLoading: boolean = true;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.fetchRegistrations();
  }

  fetchRegistrations() {
    this.registrationService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      }, error: (error) => {
        this.isLoading = false;
      }
    });
  }
  deleteUser(id: string | undefined) {
    if (!id) {
      alert("User not found");
      return;
    }

    this.registrationService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id);
        alert("User deleted successfully");
      },
      error: (error) => {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      }
    });
  }


}
