import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-vision-pro',
  imports: [],
  templateUrl: './apple-vision-pro.component.html',
  styleUrl: './apple-vision-pro.component.css'
})
export class AppleVisionProComponent {
 constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}
}
