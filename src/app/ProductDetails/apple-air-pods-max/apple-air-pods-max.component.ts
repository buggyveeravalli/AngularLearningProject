import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-air-pods-max',
  imports: [],
  templateUrl: './apple-air-pods-max.component.html',
  styleUrl: './apple-air-pods-max.component.css'
})
export class AppleAirPodsMaxComponent {
  constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}
}
