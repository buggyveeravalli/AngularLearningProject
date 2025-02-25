import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iphone16product-details-component',
  imports: [],
  templateUrl: './iphone16product-details-component.component.html',
  styleUrl: './iphone16product-details-component.component.css',
})
export class Iphone16productDetailsComponentComponent {
 constructor(private router: Router) { }
Home() {
  this.router.navigate(['/homePage']);
}
}
